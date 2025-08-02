"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
    { href: "/feedback", label: "Feedback" },
  ]

  const handleWhatsApp = () => {
    window.open("https://wa.me/1234567890?text=Hi, I would like to inquire about your cabinet services.", "_blank")
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white/90",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-amber-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">TD</span>
            </div>
            <div>
              <h1 className="font-bold text-xl text-stone-800">TD Cabinets</h1>
              <p className="text-xs text-stone-600 -mt-1">Where Aesthetics Meet Endurance</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",
                  pathname === item.href
                    ? "bg-amber-100 text-amber-800"
                    : "text-stone-700 hover:bg-amber-50 hover:text-amber-800",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Chat With Us Button */}
          <Button
            onClick={handleWhatsApp}
            className="hidden md:flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat With Us</span>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-stone-700 hover:bg-stone-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-stone-200">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",
                    pathname === item.href
                      ? "bg-amber-100 text-amber-800"
                      : "text-stone-700 hover:bg-amber-50 hover:text-amber-800",
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Button onClick={handleWhatsApp} className="mt-4 bg-green-600 hover:bg-green-700 text-white">
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat With Us
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
