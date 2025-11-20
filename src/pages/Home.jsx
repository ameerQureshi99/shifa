import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUserMd, FaAmbulance, FaStethoscope, FaFlask, FaPills } from 'react-icons/fa';
import { doctors, departments } from '../data/mockData';
import PageWrapper from '../components/PageWrapper';
import { useTheme } from '../context/ThemeContext';

const statVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

const Home = () => {
    const { setTheme } = useTheme();
    useEffect(() => {
        setTheme('general');
    }, [setTheme]);

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="bg-secondary transition-colors duration-500">
        <div className="container-custom grid md:grid-cols-2 gap-8 items-center py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-primary leading-tight mb-4 transition-colors duration-500">
              Compassionate Care, Advanced Medicine
            </h1>
            <p className="text-lg text-text-secondary mb-8">
              At Shifa Healthcare, we are dedicated to providing the highest quality of care for you and your family.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link to="/appointments" className="btn-primary">Book an Appointment</Link>
              <Link to="/departments" className="btn-secondary">Find a Department</Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="bg-primary rounded-full p-8 w-full max-w-md mx-auto aspect-square flex items-center justify-center shadow-2xl">
              <FaStethoscope className="text-white text-9xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">Our Core Services</h2>
            <p className="text-text-secondary mt-2 max-w-2xl mx-auto">Comprehensive healthcare services designed for your well-being.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
            {[
              { icon: <FaUserMd className="w-12 h-12" />, title: 'Expert Doctors' },
              { icon: <FaAmbulance className="w-12 h-12" />, title: 'Emergency Care' },
              { icon: <FaStethoscope className="w-12 h-12" />, title: 'Health Checkups' },
              { icon: <FaFlask className="w-12 h-12" />, title: 'Lab Testing' },
              { icon: <FaPills className="w-12 h-12" />, title: 'Pharmacy' },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={statVariants}
              >
                <div className="text-primary mb-4 transition-colors duration-500">{service.icon}</div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Doctors */}
      <section className="section-padding bg-secondary transition-colors duration-500">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">Meet Our Experts</h2>
            <p className="text-text-secondary mt-2 max-w-2xl mx-auto">Dedicated professionals committed to your health.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.slice(0, 4).map((doctor) => (
              <motion.div
                key={doctor.id}
                className="card text-center"
                whileHover={{ scale: 1.05 }}
              >
                <img src={doctor.image} alt={doctor.name} className="w-full h-56 object-cover"/>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{doctor.name}</h3>
                  <p className="text-primary font-semibold transition-colors duration-500">{doctor.specialty}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/doctors" className="btn-primary">View All Doctors</Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="section-padding bg-primary transition-colors duration-500 text-white">
        <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Ready to Take Control of Your Health?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">Schedule an appointment today and experience the Shifa difference. Our team is here to support you on your wellness journey.</p>
            <Link to="/appointments" className="bg-white text-primary font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-200 transition-all duration-300">
                Book Now
            </Link>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Home;
