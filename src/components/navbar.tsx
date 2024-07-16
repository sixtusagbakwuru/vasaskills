'use client'
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownItemRef = useRef<HTMLLIElement>(null);


  // Function to close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (path: string) => {
    window.location.href = path; // Navigate using Next.js router
    setIsOpen(false); // Close dropdown when an item is clicked
    
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Brand logo or name */}
          <Link href="/" >
            <span className="text-white text-xl font-bold">Next.js App</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <ul className="flex space-x-4">
            <li>
              {/* Example of a regular link */}
              <Link href="/" >
                <span className="text-white hover:text-gray-300">Home</span>
              </Link>
            </li>
            <li className="relative" ref={dropdownItemRef}>
              {/* Example of a dropdown menu */}
              <button
                className="text-white hover:text-gray-300 focus:outline-none"
                onClick={toggleMobileMenu}
              >
                <span>Dropdown</span>
              </button>
              {isOpen && (
                <ul className="absolute mt-1 w-32 bg-gray-800 rounded-md shadow-lg py-1">
                  <li>
                    <span
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-700 cursor-pointer"
                      onClick={() => handleItemClick('/about')}
                    >
                      About
                    </span>
                  </li>
                  <li>
                    <span
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-700 cursor-pointer"
                      onClick={() => handleItemClick('/services')}
                    >
                      Services
                    </span>
                  </li>
                </ul>
              )}
            </li>
            {/* Add more menu items as needed */}
          </ul>
        </div>

        {/* Mobile navigation */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
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
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
          {isOpen && (
            <div className="absolute top-16 inset-x-0 bg-gray-800 py-2" ref={dropdownRef}>
              <ul className="flex flex-col space-y-2">
                <li>
                    <Link href="/about">
                  <span
                    className="text-white px-4 py-2 block hover:bg-gray-700 cursor-pointer"
                    onClick={() => handleItemClick('/')}
                  >
                    Home
                  </span>
                  </Link>
                </li>
                <li>
                  <button
                    onClick={toggleMobileMenu}
                    className="text-white px-4 py-2 block w-full text-left hover:bg-gray-700"
                  >
                    Dropdown
                  </button>
                  {isOpen && (
                    <ul className="ml-4">
                      <li>
                        <span
                          className="text-white block px-2 py-1 hover:bg-gray-700 cursor-pointer"
                          onClick={() => handleItemClick('https://google.com')}
                        >
                          About
                        </span>
                      </li>
                      <li>
                        <span
                          className="text-white block px-2 py-1 hover:bg-gray-700 cursor-pointer"
                          onClick={() => handleItemClick('/services')}
                        >
                          Services
                        </span>
                      </li>
                    </ul>
                  )}
                </li>
                {/* Add more menu items as needed */}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
