import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-extrabold text-2xl tracking-wide">Intelligent RAG</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-yellow-300 transition font-medium">Home</a>
            <a href="#tasks" className="hover:text-yellow-300 transition font-medium">Tasks</a>
            <a href="#calendar" className="hover:text-yellow-300 transition font-medium">Calendar</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-purple-500 px-2 pt-2 pb-3 space-y-1 shadow-inner rounded-b-lg">
          <a href="#home" className="block px-3 py-2 rounded hover:bg-purple-600 transition">Home</a>
          <a href="#tasks" className="block px-3 py-2 rounded hover:bg-purple-600 transition">Tasks</a>
          <a href="#calendar" className="block px-3 py-2 rounded hover:bg-purple-600 transition">Calendar</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
