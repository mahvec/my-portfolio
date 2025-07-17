import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-[var(--color-bg)] text-[var(--color-light)] border-b border-[var(--color-accent)] sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-3 sm:px-4 md:px-6 md:py-6">
        <Link
          to="/home"
          className="text-lg sm:text-xl md:text-2xl font-extrabold text-[var(--color-white)] tracking-wide uppercase"
        >
          Opone Victor
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-10 text-sm lg:text-base font-medium uppercase">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`px-2 py-1 rounded hover:text-[var(--color-highlight)] transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-[var(--color-highlight)] font-bold"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-[var(--color-white)] hover:text-[var(--color-highlight)] transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[var(--color-bg)] border-t border-[var(--color-accent)]">
          <ul className="flex flex-col p-3 sm:px-4 py-2 space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium uppercase transition-colors duration-200 ${
                    location.pathname === link.path
                      ? "text-[var(--color-highlight)] font-bold bg-[var(--color-accent)]"
                      : "text-[var(--color-light)] hover:text-[var(--color-highlight)] hover:bg-[var(--color-accent)]"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
