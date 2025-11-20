import React, { useEffect } from 'react';
import PageWrapper from '../components/PageWrapper';
import { useTheme } from '../context/ThemeContext';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    const { setTheme } = useTheme();
    useEffect(() => {
        setTheme('general');
    }, [setTheme]);

  return (
    <PageWrapper>
      <div className="bg-secondary transition-colors duration-500">
        <div className="container-custom py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto">
            We're here to help. Reach out to us through any of the channels below.
          </p>
        </div>
      </div>
      
      <div className="section-padding">
        <div className="container-custom grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="form-input" />
                <input type="email" placeholder="Your Email" className="form-input" />
                <textarea placeholder="Your Message" rows="5" className="form-input"></textarea>
                <button type="submit" className="btn-primary w-full">Send Message</button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-3xl text-primary mt-1" />
              <div>
                <h3 className="text-xl font-bold">Our Address</h3>
                <p className="text-text-secondary">123 Health St, Medcity, MC 45678</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaPhone className="text-3xl text-primary mt-1" />
              <div>
                <h3 className="text-xl font-bold">Phone</h3>
                <p className="text-text-secondary">General: (123) 456-7890</p>
                <p className="text-text-secondary">Appointments: (123) 456-7891</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-3xl text-primary mt-1" />
              <div>
                <h3 className="text-xl font-bold">Email</h3>
                <p className="text-text-secondary">info@shifa.healthcare</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;
