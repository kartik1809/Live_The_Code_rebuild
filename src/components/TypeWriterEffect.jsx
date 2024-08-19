"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Live The Code 3.0",
    }
  ];
  return (
    <div className="flex flex-col items-center justify-center text-white  ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
