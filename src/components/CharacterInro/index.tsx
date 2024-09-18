"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CharacterSection = ({
  character,
  index,
}: {
  character: {
    id: number;
    name: string;
    description: string;
    image: string;
  };
  index: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 "
    >
      <div className="p-8 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
        {character.id % 2 == 0 ? (
          <>
            <div className=" ">
              <Image
                src={character.image}
                alt={character.name}
                width={400}
                height={400}
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="text-right">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-600">
                {character.name}
              </h2>
              <p className="text-md md:text-lg">{character.description}</p>
            </div>
          </>
        ) : (
          <>
            <div className="text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-600">
                {character.name}
              </h2>
              <p className="text-md md:text-lg ">{character.description}</p>
            </div>
            <div className=" ">
              <Image
                src={character.image}
                alt={character.name}
                width={400}
                height={400}
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </>
        )}
      </div>
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 opacity-20 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 " />
    </motion.div>
  );
};

const GameCharacterIntroduction = () => {
  const characters = [
    {
      id: 1,
      name: "Fisher Man",
      description:
        "The character fisherman is one of the most important character of the entire game There are seperate levels for fisherman in this game. As the fishman should have the knowledge about the Potential Fishing Zones which can improve its efficiency and can earn more.",
      image: "/characters/1.jpg",
    },
    {
      id: 2,
      name: "Tourist",
      description:
        "Tourists explore various oceanic locations, They receive important safety tips and alerts, such as tsunami warnings and flood precautions, ensuring they stay safe during their adventures. Tourists learn about the impact of pollution and how to minimize their footprint, promoting eco-friendly behaviors.",
      image: "/characters/2.jpg",
    },
    {
      id: 3,
      name: "Sailor",
      description:
        "Sailors are adept at navigating through various oceanic routes, using maps and tools to find the best paths. They receive real-time weather alerts, to avoid storms and other hazardous conditions. Sailors are educated on the importance of maintaining clean and healthy oceans, and protect marine life.",
      image: "/characters/3.jpg",
    },
  ];

  return (
    <div className="flex flex-col space-y-10 min-h-screen text-center text-black p-8">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-12 w-full bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Meet Our Characters
      </motion.h1>

      {characters.map((character, index) => (
        <CharacterSection
          key={character.id}
          character={character}
          index={index}
        />
      ))}
    </div>
  );
};

export default GameCharacterIntroduction;
