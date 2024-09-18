"use client";
import React, { useEffect, useState } from "react";
import HeroAnimation from "./HeroAnimation";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";

function Hero() {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  const wrapper = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const list = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.455, 0.03, 0.515, 0.955],
        delay: 1,
      },
    },
  };
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };
  return (
    <div className="w-full px-4 sm:px-8 ">
      <div className="flex flex-col items-center justify-center md:flex-col md:gap-x-6 lg:gap-x-0 xl:grid xl:grid-cols-2 mt-4">
        <div className="order-2 lg:order-1 py-10 md:py-0 shrink-0 md:w-full lg:w-7/12 xl:w-auto flex flex-col justify-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={container}
            className="text-4xl text-center lg:text-left lg:text-5xl mb-8 font-semibold"
          >
            {/* <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-500inline-block">
             Dive in into the
            </span> */}
            <HeroAnimation
              text="Dive in into the"
              className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-500 inline-block"
            />
            <HeroAnimation
              text="World of"
              className="text-transparent bg-clip-text bg-gradient-to-br from-violet-400 to-violet-600 inline-block"
            />
            <HeroAnimation
              text="fun and learning"
              className="text-transparent bg-clip-text bg-gradient-to-br from-orange-600 to-orange-300 inline-block"
            />
            {/* <span className='text-transparent bg-clip-text bg-gradient-to-br from-violet-400 to-violet-600 inline-block'>World of</span>
                    <span className='text-transparent bg-clip-text bg-gradient-to-br from-orange-600 to-orange-300 inline-block'>fun and learning</span> */}
          </motion.h1>

          <motion.ul
            initial="hidden"
            animate="visible"
            variants={wrapper}
            className="text-black space-y-2"
          >
            <motion.li variants={list} className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="fill-current h-5 shrink-0 mt-0.5"
              >
                <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM363.3 203.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 297.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l128-128z"></path>
              </svg>
              <span>
                {" "}
                Unlike textbooks, the game makes ocean literacy engaging through
                role-playing and challenging tasks.
              </span>
            </motion.li>
            <motion.li variants={list} className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="fill-current h-5 shrink-0 mt-0.5"
              >
                <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM363.3 203.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 297.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l128-128z"></path>
              </svg>
              <span>
                players are guided by helpful characters who teach them about
                the ocean and reveal fascinating facts.
              </span>
            </motion.li>
            <motion.li variants={list} className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="fill-current h-5 shrink-0 mt-0.5"
              >
                <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM363.3 203.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 297.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l128-128z"></path>
              </svg>
              <span>
                {" "}
                Features a virtual phone equipped with INCOIS services to
                provide real-time safety alerts and navigation assistance.
              </span>
            </motion.li>
            <motion.li variants={list} className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="fill-current h-5 shrink-0 mt-0.5"
              >
                <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM363.3 203.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 297.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l128-128z"></path>
              </svg>
              <span>
                Contains Level Maps , open world oceans, Scenarios, Quizes
                Leaderboards, In-game currency and special items
              </span>
            </motion.li>
          </motion.ul>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.5 }}
            className="mt-10 flex flex-col items-center sm:flex-row gap-3"
          >
            <a
              href="/"
              className="inline-flex relative z-10 h-10 rounded-xl p-px shadow-lg bg-gradient-to-b from-white to-zinc-300"
            >
              <div className="flex items-center gap-1 px-6 font-medium rounded-xl whitespace-nowrap bg-white text-black">
                <span>Get Started</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="fill-current h-3.5 "
                >
                  <path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"></path>
                </svg>
              </div>
            </a>
          </motion.div>
        </div>
        <div className="order-1  lg:order-2  shrink grow overflow-hidden ">
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="relative"
          >
            <div className="lg:w-7/8 rounded-xl overflow-hidden lg:m-6 m-4">
              <ReactPlayer
                url={"/ocean_world.mp4"}
                loop={true}
                controls={false}
                width={"100%"}
                height={"100%"}
                muted={true}
                playing={true}
              />
            </div>
            {/* <div className="relative p-px overflow-hidden rounded-3xl sm:rounded-[2rem] bg-gradient-to-br from-white to-zinc-600">
              <div className="rounded-3xl sm:rounded-[31px] overflow-hidden p-1.5 bg-gradient-to-br from-zinc-400 to-zinc-700">
                <div className="rounded-[17px] sm:rounded-[25px] overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-950">
                  <Image
                    src="/1.png"
                    className="object-cover object-center"
                    width={1000}
                    height={1000}
                    alt="Hero-Image"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <button className="inline-flex h-10 rounded-xl p-px bg-gradient-to-br from-[#84B2E5] to-[#2F6EB1] shadow-lg">
                      <div className="flex h-full items-center gap-2 px-6 font-medium rounded-[11px] bg-gradient-to-br from-[#4B91DE] to-[#276AB2] text-white button-hover">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                          className="fill-current h-3.5"
                        >
                          <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
                        </svg>
                        <span>Watch Video</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
