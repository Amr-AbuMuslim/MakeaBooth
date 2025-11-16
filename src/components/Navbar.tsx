"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/faq", label: "FAQ" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center">
              <img
                src="/LOGO (1) (2).png"
                alt="Transformers"
                className="w-full h-full object-contain opacity-95 hover:opacity-100 transition-opacity"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="
                  text-[15px] font-medium tracking-wide 
                  text-foreground/80 
                  hover:text-foreground 
                  transition-colors
                  relative group
                "
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-secondary transition-all group-hover:w-full rounded-full"></span>
              </Link>
            ))}
          </div>

          {/* Desktop Button */}
          <Link
            to="/contact"
            className="
              hidden md:block 
              px-6 py-3 
              bg-secondary 
              text-secondary-foreground 
              rounded-xl 
              shadow-sm
              hover:shadow-md 
              transition-all 
              font-semibold
            "
          >
            Get Quote
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 mt-2 rounded-xl bg-background/95 border border-border shadow-lg backdrop-blur-lg animate-fadeIn">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="
                  block px-4 py-3 
                  text-foreground/90 
                  hover:bg-secondary/10 
                  hover:text-foreground 
                  rounded-lg 
                  transition-colors
                "
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Button */}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="
                block mt-2 px-4 py-3 
                bg-secondary 
                text-secondary-foreground 
                rounded-lg 
                text-center 
                font-semibold 
                shadow 
                hover:shadow-md 
                transition-all
              "
            >
              Get Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
