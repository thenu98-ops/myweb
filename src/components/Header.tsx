import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="bg-gray-900 bg-opacity-90 shadow-sm sticky top-0 z-10 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Thenura Karunarathna</div>
        {/* Mobile menu button */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-300 hover:text-white">
            About
          </a>
          <a href="#education" className="text-gray-300 hover:text-white">
            Education
          </a>
          <a href="#projects" className="text-gray-300 hover:text-white">
            Projects
          </a>
          <a href="#experience" className="text-gray-300 hover:text-white">
            Experience
          </a>
          <a href="#skills" className="text-gray-300 hover:text-white">
            Skills
          </a>
          <a href="#contact" className="text-gray-300 hover:text-white">
            Contact
          </a>
        </nav>
      </div>
      {/* Mobile navigation */}
      {isMenuOpen && <div className="md:hidden bg-gray-900 bg-opacity-95 shadow-md">
          <div className="container mx-auto px-4 py-2 flex flex-col">
            <a href="#about" className="py-2 text-gray-300 hover:text-white" onClick={toggleMenu}>
              About
            </a>
            <a href="#education" className="py-2 text-gray-300 hover:text-white" onClick={toggleMenu}>
              Education
            </a>
            <a href="#projects" className="py-2 text-gray-300 hover:text-white" onClick={toggleMenu}>
              Projects
            </a>
            <a href="#experience" className="py-2 text-gray-300 hover:text-white" onClick={toggleMenu}>
              Experience
            </a>
            <a href="#skills" className="py-2 text-gray-300 hover:text-white" onClick={toggleMenu}>
              Skills
            </a>
            <a href="#contact" className="py-2 text-gray-300 hover:text-white" onClick={toggleMenu}>
              Contact
            </a>
          </div>
        </div>}
    </header>;
}