import { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { to: 'about', label: 'About' },
    { to: 'projects', label: 'Projects' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed w-full bg-[#1B1B2F]/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="about"
          smooth={true}
          offset={-80}
          duration={500}
          className="flex items-center space-x-2 cursor-pointer group"
        >
          <div className="text-2xl font-bold">
            <span className="text-[#7F00FF] group-hover:text-[#00E0FF] transition-colors duration-300">M</span>
            <span className="text-[#EDEDED] group-hover:text-white transition-colors duration-300">ohsan</span>
          </div>
          <div className="w-2 h-2 rounded-full bg-[#7F00FF] group-hover:bg-[#00E0FF] transition-colors duration-300"></div>
        </Link>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-[#7F00FF] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="text-[#00E0FF] font-bold border-b-2 border-[#00E0FF]"
              className="text-[#EDEDED] hover:text-[#00E0FF] transition-colors duration-300 cursor-pointer px-2 py-1"
              spy={true}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#1B1B2F]/95 shadow-lg flex flex-col items-center md:hidden z-50 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="text-[#00E0FF] font-bold border-b-2 border-[#00E0FF]"
                className="w-full text-center py-4 text-[#EDEDED] hover:text-[#00E0FF] transition-colors duration-300 cursor-pointer"
                spy={true}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 