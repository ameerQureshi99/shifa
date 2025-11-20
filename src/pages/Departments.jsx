import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import { useTheme } from '../context/ThemeContext';
import { departments } from '../data/mockData';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const Departments = () => {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme('general');
  }, [setTheme]);

  return (
    <PageWrapper>
      <div className="bg-secondary transition-colors duration-500">
        <div className="container-custom py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary">
            Our Departments
          </h1>
          <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto">
            Explore our wide range of specialized departments, each dedicated to providing expert care.
          </p>
        </div>
      </div>
      
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <Link to={`/departments/${dept.id}`} className="block card h-full">
                  <div className="p-8">
                    <div className="flex items-center space-x-4">
                      <div className="bg-secondary p-4 rounded-full">
                        <dept.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-heading">{dept.name}</h3>
                      </div>
                    </div>
                    <p className="text-text-secondary mt-4">
                      {dept.description}
                    </p>
                    <div className="mt-4 font-semibold text-primary hover:underline">
                      Learn More &rarr;
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Departments;
