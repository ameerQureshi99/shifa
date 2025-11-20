import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaHeartbeat, FaBars, FaTimes } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'About Us', path: '/about' },
  { title: 'Departments', path: '/departments' },
  { title: 'Doctors', path: '/doctors' },
  { title: 'Services', path: '/services' },
  { title: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const activeLinkStyle = {
    color: 'var(--color-primary)',
    fontWeight: '600',
  };

  const linkClasses = "block py-2 px-3 text-text-primary rounded hover:bg-secondary md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 transition-colors duration-300";
  const activeLinkClasses = "text-primary font-semibold";

  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-border sticky top-0 z-50 transition-colors duration-500">
      <div className="container-custom flex flex-wrap items-center justify-between mx-auto py-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <FaHeartbeat className="h-8 w-8 text-primary transition-colors duration-500" />
          <span className="self-center text-2xl font-bold whitespace-nowrap text-text-primary font-heading transition-colors duration-500">Shifa</span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link to="/appointments" className="btn-primary hidden sm:block">
            Appointments
          </Link>
          <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded={isOpen}>
            <span className="sr-only">Open main menu</span>
            {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
          </button>
        </div>
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink 
                  to={link.path}
                  className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}
                  onClick={() => isOpen && setIsOpen(false)}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
