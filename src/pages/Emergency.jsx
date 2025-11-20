import React, { useEffect } from 'react';
import PageWrapper from '../components/PageWrapper';
import { useTheme } from '../context/ThemeContext';
import { FaPhone, FaMapMarkerAlt, FaAmbulance } from 'react-icons/fa';

const Emergency = () => {
  const { setTheme } = useTheme();
  
  useEffect(() => {
    setTheme('emergency');
    return () => setTheme('general'); // Reset on unmount
  }, [setTheme]);

  return (
    <PageWrapper>
      <div className="bg-secondary text-text-primary transition-colors duration-500">
        <div className="container-custom py-32 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold font-heading text-primary uppercase tracking-wider">
            Emergency Services
          </h1>
          <p className="mt-4 text-xl text-text-secondary max-w-3xl mx-auto">
            24/7 Expert Care When You Need It Most.
          </p>
        </div>
      </div>
      
      <div className="section-padding bg-background transition-colors duration-500">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold font-heading text-accent mb-4">In case of a medical emergency, call now.</h2>
          <a href="tel:911" className="inline-block text-4xl md:text-6xl font-bold text-primary hover:text-opacity-80 transition-opacity my-4">
            911 or (123) 456-7890
          </a>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Our Emergency Department is fully equipped to handle all medical emergencies. We are open 24 hours a day, 7 days a week.
          </p>
        </div>
      </div>
      
      <div className="section-padding bg-secondary transition-colors duration-500">
          <div className="container-custom grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                  <FaAmbulance className="text-5xl text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">24/7 Ambulance</h3>
                  <p>Rapid response ambulance service available city-wide.</p>
              </div>
              <div className="text-center p-6">
                  <FaMapMarkerAlt className="text-5xl text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">Find Us</h3>
                  <p>123 Health St, Medcity, Emergency Entrance</p>
              </div>
              <div className="text-center p-6">
                  <FaPhone className="text-5xl text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">Emergency Hotline</h3>
                  <p>(123) 456-7890</p>
              </div>
          </div>
      </div>
    </PageWrapper>
  );
};

export default Emergency;
