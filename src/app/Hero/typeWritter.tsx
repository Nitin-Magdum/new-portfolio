"use client";
import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Hello,",
      className: "text-while-500",
    },
    {
      text: "my name is",
      className: "text-while-500",
    },
    {
      text: "Nitin,",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
        text: "and I work as a",
        className: "text-while-500",
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
