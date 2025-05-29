import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Briefcase, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white-800 text-blue-800">
      <nav className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                <Link to="/blog" className="hover:text-gray-400">
                  The Bright Hire
                </Link>
              </span>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-blue-800 hover:text-gray-600"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Desktop menu */}
            <ul className="hidden md:flex space-x-4">
              <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
              <li><Link to="/services" className="hover:text-gray-400">Services</Link></li>
              <li><Link to="/employers" className="hover:text-gray-400">For Employers</Link></li>
              <li><Link to="/candidates" className="hover:text-gray-400">For Candidates</Link></li>
              <li><Link to="/testimonials" className="hover:text-gray-400">Testimonials</Link></li>
              <li><Link to="/about" className="hover:text-gray-400">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-gray-400">Contact Us</Link></li>
            </ul>
          </div>

          {/* Mobile menu items */}
          {isMenuOpen && (
            <div className="md:hidden">
              <ul className="pt-2 pb-3 space-y-1">
                <li><Link to="/" className="block px-3 py-2 hover:bg-gray-50">Home</Link></li>
                <li><Link to="/services" className="block px-3 py-2 hover:bg-gray-50">Services</Link></li>
                <li><Link to="/employers" className="block px-3 py-2 hover:bg-gray-50">For Employers</Link></li>
                <li><Link to="/candidates" className="block px-3 py-2 hover:bg-gray-50">For Candidates</Link></li>
                <li><Link to="/testimonials" className="block px-3 py-2 hover:bg-gray-50">Testimonials</Link></li>
                <li><Link to="/about" className="block px-3 py-2 hover:bg-gray-50">About Us</Link></li>
                <li><Link to="/contact" className="block px-3 py-2 hover:bg-gray-50">Contact Us</Link></li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;