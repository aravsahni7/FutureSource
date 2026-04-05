import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'stagger' | 'orbit' | 'rise' | 'dive' | 'splash' | 'zoom'>('stagger');
  const [dotLaunched, setDotLaunched] = useState(false);

  const introWords = "Performance Marketing for Ambitious Brands".split(" ");
  // Paint splat circles
  const splatCircles = [
    // Main body
    { x: 0, y: 0, r: 85, delay: 0 },
    { x: -28, y: 18, r: 65, delay: 0.01 },
    { x: 35, y: -12, r: 58, delay: 0.01 },
    { x: -18, y: -30, r: 52, delay: 0.02 },
    { x: 30, y: 28, r: 48, delay: 0.02 },
    { x: 15, y: -38, r: 40, delay: 0.03 },
    // Medium spread
    { x: -68, y: 38, r: 32, delay: 0.04 },
    { x: 58, y: -42, r: 30, delay: 0.05 },
    { x: -52, y: -52, r: 28, delay: 0.05 },
    { x: 72, y: 18, r: 27, delay: 0.04 },
    { x: -32, y: 58, r: 24, delay: 0.06 },
    { x: 45, y: 52, r: 22, delay: 0.06 },
    { x: -60, y: -20, r: 20, delay: 0.05 },
    // Small splatters
    { x: -98, y: 52, r: 14, delay: 0.08 },
    { x: 88, y: -58, r: 12, delay: 0.09 },
    { x: -75, y: -68, r: 11, delay: 0.09 },
    { x: 105, y: 38, r: 10, delay: 0.08 },
    { x: -42, y: 82, r: 10, delay: 0.10 },
    { x: 55, y: -78, r: 9, delay: 0.10 },
    { x: -88, y: 15, r: 10, delay: 0.09 },
    // Tiny droplets
    { x: -125, y: 68, r: 6, delay: 0.12 },
    { x: 118, y: -72, r: 5, delay: 0.13 },
    { x: -95, y: -88, r: 5, delay: 0.13 },
    { x: 135, y: 55, r: 4, delay: 0.12 },
    { x: 52, y: -98, r: 4, delay: 0.14 },
    { x: -115, y: -42, r: 5, delay: 0.13 },
    { x: 68, y: 88, r: 4, delay: 0.14 },
    { x: -48, y: -95, r: 3, delay: 0.15 },
    { x: 145, y: -20, r: 3, delay: 0.15 },
  ];

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const periodRef = useRef<HTMLSpanElement>(null);

  const tunnelParticlesRef = useRef<{ angle: number, dist: number, speed: number, width: number }[]>([]);

  // Bounding properties
  const boundsRef = useRef({
    cx: 0, cy: 0,
    rx: 400, ry: 150,
    periodX: 0, periodY: 0,
    vw: 0, vh: 0
  });

  useLayoutEffect(() => {
    const updateBounds = () => {
      boundsRef.current.vw = window.innerWidth;
      boundsRef.current.vh = window.innerHeight;

      if (headlineRef.current) {
        const rect = headlineRef.current.getBoundingClientRect();
        boundsRef.current.cx = rect.left + rect.width / 2;
        boundsRef.current.cy = rect.top + rect.height / 2;
        boundsRef.current.rx = rect.width / 2 + 50;
        boundsRef.current.ry = rect.height / 2 + 40;
      }

      if (periodRef.current) {
        const rect = periodRef.current.getBoundingClientRect();
        boundsRef.current.periodX = rect.left + rect.width / 2;
        boundsRef.current.periodY = rect.top + rect.height / 2;
      }
    };

    setTimeout(updateBounds, 100);
    window.addEventListener('resize', updateBounds);
    return () => window.removeEventListener('resize', updateBounds);
  }, []);

  // Strict React Timeline orchestration
  useEffect(() => {
    const WAIT = 800; // Pause orchestrations while dot sits still
    const tDot = setTimeout(() => setDotLaunched(true), 1200 + WAIT);
    const t0 = setTimeout(() => setPhase('orbit'), 1800 + WAIT);
    const t1 = setTimeout(() => setPhase('rise'), 3500 + WAIT);
    const t2 = setTimeout(() => setPhase('dive'), 4500 + WAIT);
    const t3 = setTimeout(() => setPhase('splash'), 5200 + WAIT);
    const t4 = setTimeout(() => setPhase('zoom'), 6000 + WAIT);
    const t5 = setTimeout(() => onComplete(), 7200 + WAIT);
    return () => { clearTimeout(tDot); clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); };
  }, [onComplete]);

  // Master Canvas Physics Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const syncCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    syncCanvasSize();
    window.addEventListener('resize', syncCanvasSize);

    let animationFrameId: number;
    const startTime = performance.now();
    let history: { x: number, y: number, z: number, depthAlpha: number, time: number }[] = [];

    const render = () => {
      const now = performance.now();
      const rawElapsed = now - startTime;

      // TEMPORAL FREEZE: Hold the clock at 1200ms so the static dot rests smoothly for an extra 0.8s
      const WAIT = 800;
      let elapsed = rawElapsed;
      if (rawElapsed > 1200) {
        if (rawElapsed < 1200 + WAIT) elapsed = 1200; // freeze at dot fade-in
        else elapsed = rawElapsed - WAIT; // resume physical reality
      }

      const b = boundsRef.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // --- STAGE 0: STATIC PERIOD DOT (1000 - 1200) ---
      if (elapsed > 1000 && elapsed <= 1200) {
        const fadeIn = Math.min(1, (elapsed - 1000) / 200);
        ctx.beginPath();
        ctx.arc(b.periodX, b.periodY, 25, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(123, 47, 190, ${fadeIn})`;
        ctx.fill();
      }

      // --- STAGE 1 & 2: FLUID BEAM (1200 - 5500) ---
      const trailLife = 220;

      // Turnaround geometry
      const flipR = 55; // radius of the 180° arc at the peak
      const riseH = 180; // how high the beam rises before the arc
      const flipCY = b.cy - riseH + flipR; // vertical center of the arc circle

      if (elapsed > 1200 && elapsed < 5500) {
        let x = 0, y = 0, z = 1;
        const wobble = Math.sin(elapsed * 0.008) * 4;

        if (elapsed <= 1800) {
          // ENTRY SWEEP: Period arcs left beneath text
          const pRaw = Math.max(0, (elapsed - 1200) / 600);
          const p = pRaw * pRaw * (3 - 2 * pRaw);
          const p0 = { x: b.periodX, y: b.periodY };
          const p1 = { x: b.periodX, y: b.cy + b.ry + 150 }; // Drop low beneath the text
          const p2 = { x: b.cx - b.rx - 300, y: b.cy + b.ry + 150 }; // Sweep incredibly far left and deep
          const p3 = { x: b.cx - b.rx, y: b.cy }; // Hook back to the right, perfectly matching the helix's launch trajectory

          const mt = 1 - p;
          x = mt * mt * mt * p0.x + 3 * mt * mt * p * p1.x + 3 * mt * p * p * p2.x + p * p * p * p3.x;
          y = mt * mt * mt * p0.y + 3 * mt * mt * p * p1.y + 3 * mt * p * p * p2.y + p * p * p * p3.y;
          z = 1;
        } else if (elapsed <= 3500) {
          // VERTICAL HELIX LOOP: Drifts left-to-right while sine-waving up and down
          const pRaw = (elapsed - 1800) / 1700;
          const numLoops = 2.5;
          const theta = pRaw * Math.PI * 2 * numLoops;
          x = (b.cx - b.rx) * (1 - pRaw) + (b.cx + b.rx + 25) * pRaw;
          y = b.cy - Math.sin(theta) * b.ry;
          z = Math.cos(theta);
        } else if (elapsed <= 4500) {
          // MASSIVE FLUID TURNAROUND: Single perfectly smooth Cubic Bezier loop
          const p = (elapsed - 3500) / 1000;
          const startX = b.cx + b.rx + 25;

          // Easing for continuous velocity
          const t = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;

          // P0: Helix endpoint
          const P0 = { x: startX, y: b.cy };
          // P1: Swoop massively out to the right and up
          const P1 = { x: b.cx + 800, y: b.cy - 800 };
          // P2: Hook beautifully over the top left
          const P2 = { x: b.cx, y: b.cy - 800 };
          // P3: Plunge straight down the vertical center
          const P3 = { x: b.cx, y: b.cy };

          const mt = 1 - t;
          x = mt * mt * mt * P0.x + 3 * mt * mt * t * P1.x + 3 * mt * t * t * P2.x + t * t * t * P3.x;
          y = mt * mt * mt * P0.y + 3 * mt * mt * t * P1.y + 3 * mt * t * t * P2.y + t * t * t * P3.y;
          z = 1;
        } else if (elapsed <= 5200) {
          // Keep plunging elegantly from the broken text down into the absolute center of the screen
          const p = (elapsed - 4500) / 700;
          const screenCenterY = window.innerHeight / 2;
          x = b.cx;
          y = b.cy + p * (screenCenterY - b.cy);
          z = 1;
        } else {
          // IMPACT POINT: Exactly in the absolute center of the screen where the F is
          x = b.cx;
          y = window.innerHeight / 2;
          z = 1;
        }

        // Kill wobble during turnaround and plunge for clean shapes
        const wobbleAmount = Math.max(0, Math.min(1, (elapsed - 1200) / 300));
        const turnWobbleKill = (elapsed > 3500 && elapsed <= 4500) ? Math.max(0, 1 - (elapsed - 3500) / 300) : 1;
        const plungeWobbleKill = elapsed > 4500 ? Math.max(0, 1 - (elapsed - 4500) / 200) : 1;
        y += wobble * wobbleAmount * turnWobbleKill * plungeWobbleKill;

        const depthAlpha = z < 0 ? 0.25 : 1.0;
        history.push({ x, y, z, depthAlpha, time: elapsed });
      }

      history = history.filter(h => elapsed - h.time < 600);

      // --- BEAM SCALE / Z DEPTH ---
      // Get big as it approaches, shrink as it dives away to shatter text
      let beamScale = 1;
      if (elapsed > 3510 && elapsed <= 4500) {
        // Fluid, perfectly continuous scale expansion using a Sine wave
        // Starts at 1x, swells naturally up to massive 6x at apex, perfectly shrinks to 1.5x at impact
        const p = (elapsed - 3510) / 990;
        const linearDrop = 1 + p * 0.5; // gradually moves base from 1x to 1.5x
        const sineSwell = Math.sin(p * Math.PI) * 4.5; // sine curve peaking at 4.5
        beamScale = linearDrop + sineSwell;
      } else if (elapsed > 4500 && elapsed <= 5200) {
        // The tail rapidly thins out and is absorbed into the center splat hole
        const p = (elapsed - 4500) / 700;
        beamScale = 1.5 * (1 - Math.pow(p, 2.5));
      } else {
        beamScale = (elapsed > 5200) ? 0 : 1;
      }

      const trailLifeFinal = (elapsed > 3510 && elapsed < 4600) ? 400 : 220;

      // --- RENDER FLUID BEAM (Continuous Ribbon — no seam lines) ---
      if (history.length > 2) {
        // Split trail into front/back depth chunks
        const chunks: { isFront: boolean; points: typeof history }[] = [];
        let currentChunk: typeof history = [];
        let currentIsFront = history[0].z >= 0;

        for (let i = 0; i < history.length; i++) {
          const pt = history[i];
          const age = elapsed - pt.time;
          if (age > trailLifeFinal) continue;

          const isFront = pt.z >= 0;
          if (isFront !== currentIsFront) {
            if (currentChunk.length > 0) {
              currentChunk.push(pt);
              chunks.push({ isFront: currentIsFront, points: currentChunk });
            }
            currentChunk = [pt];
            currentIsFront = isFront;
          } else {
            currentChunk.push(pt);
          }
        }
        if (currentChunk.length > 0) {
          chunks.push({ isFront: currentIsFront, points: currentChunk });
        }

        for (const chunk of chunks) {
          const pts = chunk.points;
          if (pts.length < 2) continue;

          // Batch all quads + circles in one path, fill once (fluid look)
          ctx.beginPath();

          for (let i = 0; i < pts.length - 1; i++) {
            const pt1 = pts[i];
            const pt2 = pts[i + 1];

            const life1 = Math.max(0, 1 - ((elapsed - pt1.time) / trailLife));
            const r1 = Math.max(0.1, (life1 * 15 + Math.pow(life1, 2) * 35) / 2) * beamScale;

            const life2 = Math.max(0, 1 - ((elapsed - pt2.time) / trailLife));
            const r2 = Math.max(0.1, (life2 * 15 + Math.pow(life2, 2) * 35) / 2) * beamScale;

            const dx = pt2.x - pt1.x;
            const dy = pt2.y - pt1.y;
            const len = Math.sqrt(dx * dx + dy * dy);
            if (len === 0) continue;

            const nx = -dy / len;
            const ny = dx / len;

            ctx.moveTo(pt1.x + nx * r1, pt1.y + ny * r1);
            ctx.lineTo(pt1.x - nx * r1, pt1.y - ny * r1);
            ctx.lineTo(pt2.x - nx * r2, pt2.y - ny * r2);
            ctx.lineTo(pt2.x + nx * r2, pt2.y + ny * r2);
            ctx.closePath();

            ctx.moveTo(pt2.x + r2, pt2.y);
            ctx.arc(pt2.x, pt2.y, r2, 0, Math.PI * 2, false);
          }

          const pt0 = pts[0];
          const life0 = Math.max(0, 1 - ((elapsed - pt0.time) / trailLife));
          const r0 = Math.max(0.1, (life0 * 15 + Math.pow(life0, 2) * 35) / 2) * beamScale;
          ctx.moveTo(pt0.x + r0, pt0.y);
          ctx.arc(pt0.x, pt0.y, r0, 0, Math.PI * 2, false);

          const alpha = chunk.isFront ? 1.0 : 0.25;
          ctx.fillStyle = `rgba(123, 47, 190, ${alpha})`;
          ctx.fill('nonzero');
        }
      }

      // --- STAGE 3: TUNNEL EFFECTS (4500 - 5500) ---
      // Adds the deep perspective plunge exactly matched to the dropping beam coordinates
      if (elapsed >= 4500 && elapsed < 5500) {
        const pMode = (elapsed - 4500) / 1000;

        let bgAlpha = 1;
        if (elapsed > 5300) bgAlpha = 1 - ((elapsed - 5300) / 200);

        // Perspective Rings
        const numRings = 6;
        for (let r = 0; r < numRings; r++) {
          const ringProgress = (pMode * 3 + r / numRings) % 1; // Rushes towards camera
          const ringRadius = ringProgress * Math.max(b.vw, b.vh) * 0.8;
          const ringAlpha = bgAlpha * (1 - ringProgress) * 0.2;

          if (ringAlpha > 0.01) {
            ctx.beginPath();
            ctx.arc(b.cx, b.cy, ringRadius, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(155, 77, 255, ${ringAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Radial speed lines into the plunge center
        const numConvLines = 16;
        for (let i = 0; i < numConvLines; i++) {
          const angle = (Math.PI * 2 * i) / numConvLines;
          const innerR = 10;
          const outerR = Math.max(b.vw, b.vh);

          const x1 = b.cx + Math.cos(angle) * innerR;
          const y1 = b.cy + Math.sin(angle) * innerR;
          const x2 = b.cx + Math.cos(angle) * outerR;
          const y2 = b.cy + Math.sin(angle) * outerR;

          const lineGrad = ctx.createLinearGradient(x1, y1, x2, y2);
          lineGrad.addColorStop(0, `rgba(155, 77, 255, 0)`);
          lineGrad.addColorStop(0.1, `rgba(155, 77, 255, ${bgAlpha * 0.15})`);
          lineGrad.addColorStop(1, `rgba(155, 77, 255, ${bgAlpha * 0.05})`);

          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.strokeStyle = lineGrad;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // High velocity particles expanding outward out of the tunnel
        if (Math.random() > 0.2) {
          tunnelParticlesRef.current.push({
            angle: Math.random() * Math.PI * 2,
            dist: 5 + Math.random() * 20,
            speed: 3 + Math.random() * 15,
            width: 1 + Math.random() * 2
          });
        }

        tunnelParticlesRef.current.forEach(pt => {
          const x1 = b.cx + Math.cos(pt.angle) * pt.dist;
          const y1 = b.cy + Math.sin(pt.angle) * pt.dist;
          pt.dist += pt.speed;
          pt.speed *= 1.12;
          const x2 = b.cx + Math.cos(pt.angle) * pt.dist;
          const y2 = b.cy + Math.sin(pt.angle) * pt.dist;

          const closeness = Math.min(1, pt.dist / 400);
          const ptAlpha = bgAlpha * (0.2 + closeness * 0.4);

          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.strokeStyle = `rgba(155, 77, 255, ${ptAlpha})`;
          ctx.lineWidth = pt.width * (1 + closeness * 2);
          ctx.stroke();
        });

        tunnelParticlesRef.current = tunnelParticlesRef.current.filter(pt => pt.dist < 2000);
      }

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[200] overflow-hidden pointer-events-none flex items-center justify-center bg-background"
      animate={phase}
      variants={{
        orbit: { scale: 1 },
        rise: { scale: 1 },
        dive: {
          scale: 1.15,
          x: [0, -15, 15, -20, 20, -10, 0],
          y: [0, 15, -15, 10, -20, 10, 0],
          transition: {
            scale: { duration: 0.7, ease: "easeIn" },
            x: { duration: 0.5, ease: "easeInOut", repeat: 1 },
            y: { duration: 0.5, ease: "easeInOut", repeat: 1 }
          }
        },
        splash: {
          scale: 1.5,
          x: 0,
          y: 0,
          transition: { duration: 0.8, ease: "linear" }
        },
        zoom: {
          scale: 8,
          opacity: 0,
          transition: { duration: 1.2, ease: "easeInOut" }
        },
      }}
    >
      <div className="relative w-screen h-screen flex flex-col items-center justify-center overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-40" />

        {/* Headline Text Container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-8" style={{ marginTop: '-15vh' }}>
          <motion.h1
            ref={headlineRef}
            className="font-sans text-4xl md:text-6xl lg:text-8xl max-w-5xl text-center leading-[1.0] font-extrabold tracking-tighter text-foreground mx-auto flex flex-wrap justify-center gap-x-3 md:gap-x-5 uppercase"
            initial="hidden" animate={phase === 'dive' || phase === 'splash' || phase === 'zoom' ? 'shatter' : 'visible'}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
              shatter: { transition: { staggerChildren: 0.03 } }
            }}
          >
            {introWords.map((word, i) => (
              <span key={i} className="inline-block overflow-visible pb-4">
                <motion.span
                  className="inline-block"
                  custom={i}
                  variants={{
                    hidden: { y: "100%", opacity: 0 },
                    visible: { y: "0%", opacity: 1, filter: 'blur(0px)', scale: 1, x: 0, rotate: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } },
                    shatter: custom => ({
                      opacity: 0,
                      scale: 1.5 + (custom % 3) * 0.3,
                      y: (custom % 2 === 0 ? -1 : 1) * (180 + (custom * 15)),
                      x: (custom % 3 === 1 ? -1 : 1) * (140 + (custom * 25)),
                      rotate: (custom % 2 === 0 ? -25 : 25),
                      filter: 'blur(20px)',
                      transition: { duration: 0.8, delay: custom * 0.04, ease: "easeOut" }
                    })
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
            {/* Period dot - position tracker */}
            <span className="inline-flex items-end pb-4" style={{ marginLeft: '0.1em' }}>
              <span
                ref={periodRef}
                className="inline-block rounded-full"
                style={{ width: '0.28em', height: '0.28em', opacity: 0, marginBottom: '0.1em' }}
              />
            </span>
          </motion.h1>
        </div>

        {/* Paint Splat Logo */}
        <AnimatePresence>
          {(phase === 'splash' || phase === 'zoom') && (
            <motion.div
              className="absolute flex items-center justify-center overflow-visible z-50 pointer-events-none"
              initial={{ scale: 1, opacity: 1 }}
              animate={{
                scale: phase === 'zoom' ? 5 : 1,
                opacity: phase === 'zoom' ? 0 : 1
              }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            >
              {splatCircles.map((circle, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: circle.r * 2,
                    height: circle.r * 2,
                    backgroundColor: '#7B2FBE',
                  }}
                  initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                  animate={{ x: circle.x, y: circle.y, scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.35,
                    delay: circle.delay,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />
              ))}

              <motion.span
                className="font-editorial font-bold text-white relative z-10"
                style={{ fontSize: 'clamp(4rem, 10vw, 8rem)' }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  opacity: { duration: 0.25, delay: 0.15 },
                  scale: { duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
                }}
              >
                F.
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
