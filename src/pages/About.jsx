import React, { useEffect } from 'react';
import PageWrapper from '../components/PageWrapper';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaBullseye, FaEye } from 'react-icons/fa';

const stats = [
  { value: '25+', label: 'Years of Experience' },
  { value: '500K+', label: 'Patients Treated' },
  { value: '150+', label: 'Expert Doctors' },
  { value: '98%', label: 'Patient Satisfaction' },
];

const About = () => {
    const { setTheme } = useTheme();
    useEffect(() => {
        setTheme('general');
    }, [setTheme]);

  return (
    <PageWrapper>
      <div className="bg-secondary transition-colors duration-500">
        <div className="container-custom py-24 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold font-heading text-primary"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            About Shifa Healthcare
          </motion.h1>
          <motion.p 
            className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Committed to providing exceptional medical care with compassion and expertise since 1998.
          </motion.p>
        </div>
      </div>
      
      <section className="section-padding">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full h-80 bg-primary rounded-lg shadow-xl flex items-center justify-center">
                <p className="text-white text-2xl p-8">Placeholder for hospital image</p>
            </div>
          </motion.div>
          <div>
            <h2 className="text-3xl font-bold font-heading mb-4">Our Story of Care</h2>
            <p className="text-text-secondary mb-4">
              Shifa Healthcare was founded with a simple yet powerful mission: to bring world-class healthcare within everyone's reach. What started as a small clinic has grown into a multi-specialty hospital, renowned for its clinical excellence and patient-centric approach.
            </p>
            <p className="text-text-secondary">
              We believe in a holistic approach to health, combining advanced medical technology with a personal touch. Our team of dedicated professionals works tirelessly to ensure that every patient receives the best possible care in a safe and welcoming environment.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary transition-colors duration-500">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                <FaHandHoldingHeart className="text-4xl text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold font-heading mb-2">Our Mission</h3>
                <p className="text-text-secondary">To provide compassionate, accessible, high-quality, and cost-effective healthcare to the community we serve.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
              <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                <FaEye className="text-4xl text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold font-heading mb-2">Our Vision</h3>
                <p className="text-text-secondary">To be a leader in medicine, renowned for our care, research, and education, and to improve the health and well-being of our community.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
              <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                <FaBullseye className="text-4xl text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold font-heading mb-2">Our Values</h3>
                <p className="text-text-secondary">Compassion, Excellence, Integrity, Teamwork, and Innovation are the core principles that guide our actions.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <p className="text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-text-secondary mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default About;
