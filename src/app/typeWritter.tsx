"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Hello,",
    },
    {
      text: "my name is",
    },
    {
      text: "Nitin.",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
        text: "and I work as a "
    },
    {
        text: "Data Engineer.",
        className: "text-blue-500 dark:text-blue-500",
    }
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
