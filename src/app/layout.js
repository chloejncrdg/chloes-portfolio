"use client"

import { Inter } from "next/font/google";
import "./globals.css";

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false // Prevent FontAwesome from adding its own CSS

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from "react";


const inter = Inter({ subsets: ["latin"] });


function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const navbarRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close the mobile menu when clicking outside of the navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navbarRef.current && !navbarRef.current.contains(event.target) && // If click is outside of the navbar
        mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) // If click is outside of the mobile menu
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    // Attach the event listener
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener when the component is unmounted
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="flex items-center justify-between px-8 py-4 bg-[#fefcf7] shadow-sm"
      ref={navbarRef} // Reference to the entire navbar
    >
      {/* Logo for Desktop */}
      <Link href="/">
        <Image
          src="/assets/home/navbar_logo.png" // Update path as needed
          alt="Logo"
          className="h-auto max-h-16 w-auto object-contain"
          width={100} // Specify width for optimization
          height={40} // Specify height for optimization
        />
      </Link>

      {/* Navigation Links for Desktop */}
      <div className="hidden md:flex gap-3">
        <Link href="/works">
          <div
            className="text-lg border border-solid border-black px-3 py-1 rounded-full"
            onClick={closeMobileMenu} // Close menu on click
          >
            WORKS
          </div>
        </Link>
        <Link href="/about">
          <div
            className="text-lg border border-solid border-black px-3 py-1 rounded-full"
            onClick={closeMobileMenu} // Close menu on click
          >
            ABOUT
          </div>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="inline-flex items-center w-6 h-6 justify-center text-sm text-gray-500 rounded-lg md:hidden"
        onClick={toggleMobileMenu}
      >
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="10" rx="10"></rect>
          <rect y="30" width="100" height="10" rx="10"></rect>
          <rect y="60" width="100" height="10" rx="10"></rect>
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef} // Reference to the mobile menu
          className="absolute top-16 left-0 right-0 bg-[#fefcf7] shadow-lg md:hidden flex flex-col items-center py-4"
        >
          <Link href="/works">
            <div
              className="text-lg border border-solid border-black px-3 py-1 rounded-full mb-3"
              onClick={closeMobileMenu} // Close menu on click
            >
              WORKS
            </div>
          </Link>
          <Link href="/about">
            <div
              className="text-lg border border-solid border-black px-3 py-1 rounded-full mb-3"
              onClick={closeMobileMenu} // Close menu on click
            >
              ABOUT
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}


function Footer() {
  return (
    <div className="flex items-center justify-between px-8 py-4 bg-[#fefcf7] text-lg">
      {/* Logo */}
      <Image
        src="assets/home/navbar_logo.png" // Replace with the actual path to your logo
        alt="Logo"
        className="h-auto max-h-12 w-auto object-contain" // Ensures proper scaling and aspect ratio
      />

      {/* Copyright */}
      <p>&#169; CHLOE JADYN CARANDANG, 2024</p>

      {/* CV Request */}
      <Link href="mailto:carandangcn@students.national-u.edu.ph"><p className="cursor-pointer hover:underline">REQUEST CV</p></Link>
    </div>
  );
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
