import React, { useState, useEffect } from 'react';
import PageWrapper from '../components/PageWrapper';
import { useTheme } from '../context/ThemeContext';
import { doctors, departments } from '../data/mockData';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
    },
  }),
};

const Doctors = () => {
  const { setTheme } = useTheme();
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    setTheme('general');
  }, [setTheme]);

  const handleFilter = (specialty) => {
    setActiveFilter(specialty);
    if (specialty === 'All') {
      setFilteredDoctors(doctors);
    } else {
      setFilteredDoctors(doctors.filter(doc => doc.specialty === specialty));
    }
  };
  
  const uniqueSpecialties = ['All', ...new Set(doctors.map(doc => doc.specialty))];

  return (
    <PageWrapper>
      <div className="bg-secondary transition-colors duration-500">
        <div className="container-custom py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary">
            Our Medical Team
          </h1>
          <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto">
            Meet our team of experienced and compassionate doctors dedicated to your health.
          </p>
        </div>
      </div>

      <div className="section-padding">
        <div className="container-custom">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {uniqueSpecialties.map(spec => (
              <button
                key={spec}
                onClick={() => handleFilter(spec)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === spec 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-white text-text-secondary hover:bg-gray-100 border border-border'
                }`}
              >
                {spec}
              </button>
            ))}
          </div>

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredDoctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                className="card"
                custom={index}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
              >
                <div className="relative">
                  <img src={doctor.image} alt={doctor.name} className="w-full h-64 object-cover" />
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
                     <h3 className="text-xl font-bold text-white">{doctor.name}</h3>
                     <p className="text-primary font-semibold text-sm bg-white/20 backdrop-blur-sm inline-block px-2 py-1 rounded">{doctor.specialty}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-text-secondary text-sm mb-4">{doctor.bio}</p>
                  <button className="w-full btn-secondary text-sm">View Profile</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Doctors;
