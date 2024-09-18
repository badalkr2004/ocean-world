"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, Menu, X } from "lucide-react";
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
          className={`absolute   right-0 w-full h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
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
              className="fixed inset-0  transform  transition-transform duration-300 ease-in-out z-40"
            >
              <nav className="flex flex-col justify-between h-full space-y-0 mt-10 ">
                <div className="mobile_top">
                  <ul className="p-8 flex flex-col space-y-4">
                    <li className="flex justify-between text-3xl font-bold">
                      <Link href="#">Our games</Link>
                      <ChevronRight className="text-3xl font-semibold" />
                    </li>
                    <li className="flex justify-between text-3xl font-bold">
                      <Link href="#">Our Story</Link>
                      <ChevronRight className="text-3xl font-semibold" />
                    </li>
                    <li className="flex justify-between text-3xl font-bold text-orange-500">
                      <Link href="#">We&apos;re Hiring</Link>
                      <ChevronRight className="text-3xl font-semibold" />
                    </li>
                  </ul>
                  <hr className="w-1/4 ml-8 h-[2px] font-bold border-t-0 bg-transparent bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-75 dark:via-neutral-400" />
                  <ul className="p-8 flex flex-col space-y-4">
                    <li className="flex justify-between text-xl font-bold">
                      <Link href="/">Home</Link>
                      <ChevronRight className="text-3xl font-semibold" />
                    </li>
                    <li className="flex justify-between text-xl font-bold">
                      <Link href="#">About</Link>
                      <ChevronRight className="text-3xl font-semibold" />
                    </li>
                    <li className="flex justify-between text-xl font-bold">
                      <Link href="#">Contact us</Link>
                      <ChevronRight className="text-3xl font-semibold" />
                    </li>
                  </ul>
                </div>

                <div className="mobile_bottom p-20">
                  <p className="text-center font-bold">
                    Made by Team Bit Brains
                  </p>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
