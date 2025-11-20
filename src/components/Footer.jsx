import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeartbeat, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Contact', path: '/contact' },
  ];

  const patientLinks = [
    { name: 'Appointments', path: '/appointments' },
    { name: 'Patient Portal', path: '/patient-portal' },
    { name: 'Pharmacy', path: '/pharmacy' },
    { name: 'Lab Reports', path: '/lab-reports' },
    { name: 'Blog', path: '/blog' },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, path: '#' },
    { icon: <FaTwitter />, path: '#' },
    { icon: <FaInstagram />, path: '#' },
    { icon: <FaLinkedin />, path: '#' },
  ];

  return (
    <footer className="bg-secondary text-text-primary transition-colors duration-500">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Shifa */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <FaHeartbeat className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold font-heading">Shifa</span>
            </Link>
            <p className="text-text-secondary">
              Providing compassionate, high-quality healthcare to our community. Your health is our priority.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.path} className="text-text-secondary hover:text-primary transition-colors duration-300 text-2xl">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-primary transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Patients */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">For Patients</h3>
            <ul className="space-y-2">
              {patientLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-primary transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 font-heading">Contact Us</h3>
            <p className="text-text-secondary">123 Health St, Medcity, MC 45678</p>
            <p className="text-text-secondary">Phone: (123) 456-7890</p>
            <p className="text-text-secondary">Email: contact@shifa.healthcare</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-text-secondary">
          <p>&copy; {new Date().getFullYear()} Shifa Healthcare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
