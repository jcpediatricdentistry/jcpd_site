"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { SmileIcon as Tooth } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/*<Tooth className="h-8 w-8 text-muted-blue" />*/}
          <div className="h-10 w-auto">
            <img
              src="/log/JCPD.png"
              alt="Johnson City Pediatric Dentistry Logo"
              className="h-full w-auto"
            />
           <span className="font-bold text-xl text-gray-800">Johnson City Pediatric Dentistry</span>
         </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-gray-700 hover:text-vibrant-blue transition-colors">
            About Us
          </Link>
          <Link href="#services" className="text-gray-700 hover:text-vibrant-blue transition-colors">
            Services
          </Link>
          <Link href="#reviews" className="text-gray-700 hover:text-vibrant-blue transition-colors">
            Reviews
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-vibrant-blue transition-colors">
            Contact
          </Link>
          <Link
            href="#book"
            className="bg-vibrant-blue hover:bg-muted-blue text-gray-800 px-5 py-2 rounded-full transition-colors font-medium"
          >
            Call Us
          </Link>
        </nav>

        <button className="md:hidden text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}
