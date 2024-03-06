"use client";

import React, { useState, useEffect } from "react";
import { SparklesCore } from "../../components/ui/sparkles";
import { TypewriterEffectSmoothDemo } from './typeWritter'


function TimeDisplay() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatAMPM = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    const strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    return strTime.toUpperCase(); // Convert to uppercase
  }

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
  }

  return (
    <div className="absolute top-0 left-0 m-4 text-white z-50">
      <div className="text-lg font-semibold">
        {formatAMPM(currentTime)}
      </div>
      <div className="text-sm">
        {formatDate(currentTime)}
      </div>
    </div>
  );
}

export function SparklesPreview() {
  return (
    <div className="h-[49rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.2}
          particleDensity={200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
          {/* <TimeDisplay/> */}
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
      
        <TypewriterEffectSmoothDemo/>
      </h1>
    </div>
  );
}

