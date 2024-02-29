"use client";
import React from "react";
import { SparklesCore } from "../components/ui/sparkles";
import { TypewriterEffectSmoothDemo } from '../app/typeWritter'
import {  NavbarDemo } from '../app/Navbar';

export function SparklesPreview() {
  return (
    <div className="h-[49rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <NavbarDemo/>
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.2}
          particleDensity={150}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        <TypewriterEffectSmoothDemo/>
      </h1>
    </div>
  );
}
