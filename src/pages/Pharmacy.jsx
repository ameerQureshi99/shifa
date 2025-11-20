import React, { useEffect } from 'react';
import PageWrapper from '../components/PageWrapper';
import { useTheme } from '../context/ThemeContext';
import { FaPills, FaPrescriptionBottleAlt, FaTruck } from 'react-icons/fa';

const Pharmacy = () => {
    const { setTheme } = useTheme();
    useEffect(() => {
        setTheme('general');
    }, [setTheme]);

  return (
    <PageWrapper>
      <div className="bg-secondary transition-colors duration-500">
        <div className="container-custom py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary">
            Shifa Pharmacy
          </h1>
          <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto">
            Your trusted source for prescriptions, health products, and expert advice.
          </p>
        </div>
      </div>
      
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                  <FaPrescriptionBottleAlt className="text-5xl text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Refill Prescriptions</h3>
                  <p className="text-text-secondary">Easily request refills for your prescriptions online. Fast, secure, and convenient.</p>
                  <button className="btn-secondary mt-4">Refill Now</button>
              </div>
              <div className="p-6">
                  <FaPills className="text-5xl text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Over-the-Counter</h3>
                  <p className="text-text-secondary">Shop a wide range of vitamins, supplements, and healthcare products.</p>
                  <button className="btn-secondary mt-4">Shop Products</button>
              </div>
              <div className="p-6">
                  <FaTruck className="text-5xl text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Home Delivery</h3>
                  <p className="text-text-secondary">Get your medications and health products delivered right to your doorstep.</p>
                  <button className="btn-secondary mt-4">Learn More</button>
              </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Pharmacy;
