import React, { useEffect, useRef, useState } from 'react';

interface TransparentImageProps {
  src: string;
  alt: string;
  className?: string;
  /**
   * Threshold (0–255) for how "white" a pixel must be to be made transparent.
   * Higher = more aggressive removal. Default: 240
   */
  threshold?: number;
  draggable?: boolean;
}

/**
 * Renders an image with its white/light background removed at runtime via Canvas.
 * Pixels where R, G, and B are all above `threshold` are made fully transparent.
 * Near-threshold pixels get a soft fade for smooth edges.
 */
export default function TransparentImage({
  src,
  alt,
  className,
  threshold = 235,
  draggable = false,
}: TransparentImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;

    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      canvas.width = img.width;
      canvas.height = img.height;
      setDimensions({ width: img.width, height: img.height });

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, img.width, img.height);
      const data = imageData.data;

      const softEdge = 20; // range below threshold for soft fade

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // Check if pixel is white-ish
        if (r > threshold && g > threshold && b > threshold) {
          data[i + 3] = 0; // fully transparent
        } else {
          // Soft edge: fade pixels that are near-white
          const minChannel = Math.min(r, g, b);
          const lowerBound = threshold - softEdge;
          if (r > lowerBound && g > lowerBound && b > lowerBound && minChannel > lowerBound) {
            const factor = (threshold - minChannel) / softEdge;
            data[i + 3] = Math.round(data[i + 3] * Math.min(1, factor));
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);
      setLoaded(true);
    };
  }, [src, threshold]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        opacity: loaded ? 1 : 0,
        transition: 'opacity 0.3s ease',
        width: '100%',
        height: 'auto',
        maxWidth: dimensions.width > 0 ? `${dimensions.width}px` : undefined,
      }}
      role="img"
      aria-label={alt}
      draggable={draggable}
    />
  );
}
