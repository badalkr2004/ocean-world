"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

const GameMap = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0 }}
      animate={
        inView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 50, scale: 0 }
      }
      transition={{ duration: 0.5, delay: 1 * 0.2 }}
      className="relative overflow-hidden rounded-lg transition-all duration-300 l hover:scale-105 "
    >
      <div className="p-8 md:flex flex-col md:flex-w items-center space-y-4 md:space-y-0 md:space-x-8">
        <div className="md:flex">
          <div className="md:flex md:w-1/3">
            <h1 className="text-3xl text-orange-500 origin-center md:rotate-90 font-bold text-center w-full bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Game Map
            </h1>
            <p className="text-center md:text-left text-lg p-4 md:text-2xl text-teal-700 bg-gradient-to-r from-orange-600 via-blue-500 to-teal-400 inline-block text-transparent bg-clip-text">
              We will be providing in game Navigation System through the Map
              Integration
            </p>
          </div>
          <Image
            src={"/characters/gameMap.png"}
            alt={"gameMap"}
            width={800}
            height={800}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default GameMap;
