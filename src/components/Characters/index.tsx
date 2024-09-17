"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Characters() {
  const scrollref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.5, 1], [0, 0, 1, 1]);
  const translateX = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [200, 100, 0, 0]
  );
  console.log(opacity, translateX);
  return (
    <motion.div
      ref={scrollref}
      style={{ opacity, translateX }}
      className="relative my-4"
    >
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 py-20 grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-24 lg:gap-x-40">
        <div className="flex flex-col items-center gap-8">
          <p className="text-blue-700">Our Characters</p>
          <div className="flex w-full justify-around md:justify-between">
            <Image
              className="h-[120px] w-auto  transition-all duration-300 cursor-pointer"
              src="/characters/1.jpg"
              alt="Node"
              width={114}
              height={102}
            />
            <Image
              className="h-[120px] w-auto  transition-all duration-300 cursor-pointer"
              src="/characters/2.jpg"
              alt="Node"
              width={200}
              height={200}
            />
            <Image
              className="h-[120px] w-auto  transition-all duration-300 cursor-pointer"
              src="/characters/3.jpg"
              alt="Node"
              width={114}
              height={102}
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-8">
          <p className="text-blue-900">Our in game Assets</p>
          <div className="flex space-x-14 w-full justify-around md:justify-between">
            <Image
              className="h-[120px] w-auto  transition-all duration-300 cursor-pointer"
              src="/characters/boatbg.png"
              alt="Node"
              width={200}
              height={200}
            />
            <Image
              className="h-[120px] w-auto  transition-all duration-300 cursor-pointer"
              src="/characters/gameMap.png"
              alt="Node"
              width={200}
              height={200}
            />
            <Image
              className="h-[120px] w-auto  transition-all duration-300 cursor-pointer"
              src="/characters/phone.png"
              alt="Node"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-96 overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 h-[50px] w-full bg-blue-500/30 blur-3xl"></div>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 h-[75px] w-2/3 bg-blue-500/40 blur-3xl"></div>
      </div>
      <hr className="w-full border-none h-px bg-gradient-to-r from-blue-700/0 via-teal-700/25 to-rose-700/0" />
    </motion.div>
  );
}

export default Characters;
