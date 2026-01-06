import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center p-4">
            <img
              src="/logo.png"
              alt="Savannah Outdoors Safaris"
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-white hover:text-white/80 transition-colors uppercase font-medium tracking-[0.2em]"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                textTransform: "uppercase",
              }}
            >
              Tours
            </a>
            <a
              href="#"
              className="text-white hover:text-white/80 transition-colors uppercase font-medium tracking-[0.2em]"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                textTransform: "uppercase",
              }}
            >
              Destinations
            </a>
            <Link
              to="/blog"
              className="text-white hover:text-white/80 transition-colors uppercase font-medium tracking-[0.2em]"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                textTransform: "uppercase",
              }}
            >
              Blog
            </Link>
            <a
              href="#"
              className="text-white hover:text-white/80 transition-colors uppercase font-medium tracking-[0.2em]"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                textTransform: "uppercase",
              }}
            >
              About
            </a>

            <Button
              variant="outline"
              className="bg-[var(--safari-red)] hover:bg-[var(--safari-red)] text-white"
              style={{ textTransform: "uppercase", borderRadius: "0px" }}
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-black/80 backdrop-blur-sm rounded-lg">
            <div className="flex flex-col gap-4 px-4">
              <Link
                to="/"
                className="text-white hover:text-white/80 transition-colors py-2 uppercase"
                onClick={() => setIsOpen(false)}
                style={{
                  fontFamily: "var(--font-serif)",
                  textTransform: "uppercase",
                }}
              >
                Home
              </Link>
              <a
                href="#"
                className="text-white hover:text-white/80 transition-colors py-2 uppercase"
                style={{
                  fontFamily: "var(--font-serif)",
                  textTransform: "uppercase",
                }}
              >
                Tours
              </a>
              <a
                href="#"
                className="text-white hover:text-white/80 transition-colors py-2 uppercase"
                style={{
                  fontFamily: "var(--font-serif)",
                  textTransform: "uppercase",
                }}
              >
                Destinations
              </a>
              <Link
                to="/blog"
                className="text-white hover:text-white/80 transition-colors py-2 uppercase"
                onClick={() => setIsOpen(false)}
                style={{
                  fontFamily: "var(--font-serif)",
                  textTransform: "uppercase",
                }}
              >
                Blog
              </Link>
              <a
                href="#"
                className="text-white hover:text-white/80 transition-colors py-2 uppercase"
                style={{
                  fontFamily: "var(--font-serif)",
                  textTransform: "uppercase",
                }}
              >
                About
              </a>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 w-full uppercase"
                style={{
                  fontFamily: "var(--font-serif)",
                  textTransform: "uppercase",
                }}
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
