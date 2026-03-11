import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';

const STORAGE_KEY = 'fs_cookie_accepted';

export default function CookieBanner() {
  const [accepted, setAccepted] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const val = localStorage.getItem(STORAGE_KEY);
      setAccepted(val === 'true');
    } catch (e) {
      setAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch (e) {
      // ignore
    }
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-[min(1100px,calc(100%-2rem))]">
      <div className="rounded-2xl bg-card border border-border p-4 shadow-lg flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="font-medium">We use cookies to improve your experience.</p>
          <p className="text-sm text-muted-foreground">By continuing to use this site you accept our cookie policy.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button onClick={handleAccept} className="whitespace-nowrap">Accept</Button>
        </div>
      </div>
    </div>
  );
}
