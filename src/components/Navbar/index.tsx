"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const NavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium block"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white md:mx-auto md:w-[90%] md:shadow-lg w-full md:rounded-b-2xl">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between ">
          <div className="flex-shrink-0 py-4">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              <Image
                src="/bit_brains.png"
                alt="bit brains logo"
                height={100}
                width={100}
              />
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:justify-end md:flex-1">
            <div className="flex items-baseline space-x-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Overlay Sidebar for Mobile */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${
          isOpen ? "visible" : "invisible"
        }`}
        aria-hidden={!isOpen}
      >
        {/* Sidebar */}
        <div
          className={`absolute top-14 right-0 w-full h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 ">
            <button
              onClick={closeMenu}
              className="absolute z-50 top-4 right-4 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Close main menu</span>
              <X className="block h-6 w-6" />
            </button>

            <div
              id="sideNav"
              className="fixed inset-0 bg-gradient-to-b from-blue-700 to-teal-900 transform  transition-transform duration-300 ease-in-out z-40"
            >
              <nav className="flex flex-col h-full space-y-0 ">
                <div className="block w-3/4 p-4    text-blue-900 text-xl font-bold transition-transform hover:scale-105 hover:shadow-ocean hover:bg-blue-300">
                  <NavLink href="/home">🌊 Home</NavLink>
                </div>
                <div className="block w-3/4 p-4    text-blue-900 text-xl font-bold transition-transform hover:scale-105 hover:shadow-ocean hover:bg-blue-300">
                  <NavLink href="/about">🐠 About Us</NavLink>
                </div>

                <div className="block w-3/4 p-4    text-blue-900 text-xl font-bold transition-transform hover:scale-105 hover:shadow-ocean hover:bg-blue-300">
                  <NavLink href="/services">🐋 Services</NavLink>
                </div>

                <div className="block w-3/4 p-4    text-blue-900 text-xl font-bold transition-transform hover:scale-105 hover:shadow-ocean hover:bg-blue-300">
                  <NavLink href="/explore">🏝️ Explore</NavLink>
                </div>

                <div className="block w-3/4 p-4    text-blue-900 text-xl font-bold transition-transform hover:scale-105 hover:shadow-ocean hover:bg-blue-300">
                  <NavLink href="/contact">⚓ Contact</NavLink>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
