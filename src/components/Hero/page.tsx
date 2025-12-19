// components/VideoCover.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';

const Featured: React.FC = () => {
  const [showTextBox, setShowTextBox] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  // --- Dynamic Height Logic ---
  const setScreenHeight = () => {
    // Get the actual viewport height in pixels
    const vh = window.innerHeight * 0.01;
    // Set a CSS Custom Property --vh
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    if (containerRef.current) {
      // Increase height slightly for wide screens
      const isWideScreen = window.innerWidth > 1280; // adjust breakpoint if needed
      const heightMultiplier = isWideScreen ? 100 : 100; // 110vh for wide screens
      containerRef.current.style.height = `calc(var(--vh, 1vh) * ${heightMultiplier})`;
    }
  };

  useEffect(() => {
    setScreenHeight();
    window.addEventListener('resize', setScreenHeight);
    return () => window.removeEventListener('resize', setScreenHeight);
  }, []);
  // --- End Dynamic Height Logic ---

  useEffect(() => {
    // Show the text box after a short delay on component mount
    const timer = setTimeout(() => setShowTextBox(true), 500); // 500ms delay
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden w-full">
      {/* --- Video Element --- */}
      <video
        className="absolute top-0 left-0 h-[90vh] object-contain"
        src="/home/cov2.webm"
        autoPlay
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>

      {/* --- Animated Text Box --- */}
      <div
        className={`
          absolute 
          bottom-70 left-8           
          p-6 max-w-sm w-full       
          bg-white/80               
          rounded-lg shadow-2xl     
          transition-opacity duration-1000 ease-in-out 
          ${showTextBox ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} 
        `}
      >
        <p className="text-2xl text-black mb-4">Sustainability Report FY25</p>

        <h1 className="text-4xl font-bold text-[#3facc4]">Re-imagining</h1>
        <h1 className="text-4xl font-bold text-[#3facc4] mb-4">Energy</h1>
        <p className="text-gray-700 text-sm">
          15 years. Leading Impact. Empowering Lives
        </p>
      </div>
    </div>
  );
};

export default Featured;
