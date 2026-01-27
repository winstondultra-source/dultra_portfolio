'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black bg-opacity-90 text-white sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Winston Dultra
        </Link>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>

        <div className={`${isOpen ? 'block' : 'hidden'} md:block absolute md:static top-16 left-0 right-0 bg-black md:bg-transparent md:flex gap-8 p-4 md:p-0`}>
          <a href="#projects" className="block md:inline hover:text-purple-400 transition-colors">
            Projects
          </a>
          <a href="#learning" className="block md:inline hover:text-purple-400 transition-colors">
            Learning
          </a>
          <a href="#contact" className="block md:inline hover:text-purple-400 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
