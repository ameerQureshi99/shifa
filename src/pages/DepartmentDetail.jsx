import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { departments, doctors } from '../data/mockData';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import { FaUserMd, FaCalendarAlt } from 'react-icons/fa';

const DepartmentDetail = () => {
  const { departmentId } = useParams();
  const { setTheme } = useTheme();
  const [department, setDepartment] = useState(null);
  const [departmentDoctors, setDepartmentDoctors] = useState([]);

  useEffect(() => {
    const foundDept = departments.find(d => d.id === departmentId);
    if (foundDept) {
      setDepartment(foundDept);
      setTheme(foundDept.theme);
      
      const specialtyMap = {
        'general-medicine': 'General Medicine',
        'pediatrics': 'Pediatrics',
        'cardiology': 'Cardiology',
        'dermatology': 'Dermatology',
        'emergency': 'Emergency Medicine',
        'neurology': 'Neurology',
        'orthopedics': 'Orthopedics',
        'nephrology': 'Nephrology',
        'pulmonology': 'Pulmonology',
      };
      
      const specialty = specialtyMap[foundDept.id];
      if (specialty) {
        setDepartmentDoctors(doctors.filter(doc => doc.specialty === specialty));
      } else {
        setDepartmentDoctors([]);
      }

    } else {
        // Handle case where department is not found
        setTheme('general');
    }
    
    // Cleanup to reset theme when unmounting
    return () => {
      setTheme('general');
    };
  }, [departmentId, setTheme]);

  if (!department) {
    return (
      <PageWrapper>
        <div className="container-custom section-padding text-center">
          <h1 className="text-2xl font-bold">Department not found.</h1>
          <Link to="/departments" className="btn-primary mt-4 inline-block">Back to Departments</Link>
        </div>
      </PageWrapper>
    );
  }

  const { name, description, icon: Icon, image } = department;

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section 
        className="bg-primary text-white transition-colors duration-500 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-secondary opacity-20">
            {/* Placeholder for department-specific imagery */}
        </div>
        <div className="container-custom py-24 md:py-32 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Icon className="text-6xl mx-auto mb-4 text-accent" />
            <h1 className="text-4xl md:text-6xl font-bold font-heading">{name}</h1>
            <p className="text-lg mt-4 max-w-2xl mx-auto">{description}</p>
          </motion.div>
        </div>
      </section>

      {/* Department Info */}
      <section className="section-padding">
        <div className="container-custom grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold font-heading mb-4 text-primary transition-colors duration-500">About the {name} Department</h2>
            <p className="text-text-secondary mb-4">
              The {name} department at Shifa Healthcare is a center of excellence, providing state-of-the-art diagnostic and treatment services. Our team of highly skilled specialists is dedicated to delivering personalized care tailored to each patient's unique needs. We utilize the latest medical advancements and a multidisciplinary approach to ensure the best possible outcomes.
            </p>
            <p className="text-text-secondary">
              Whether you are seeking routine care, second opinions, or treatment for complex conditions, our department is equipped to provide comprehensive services. We are committed to patient education, ensuring you are an active partner in your healthcare journey.
            </p>
            <div className="mt-8">
              <Link to="/appointments" className="btn-primary flex items-center gap-2 w-fit">
                <FaCalendarAlt />
                Book an Appointment
              </Link>
            </div>
          </div>
          <div className="bg-secondary p-8 rounded-lg shadow-lg transition-colors duration-500">
            <h3 className="text-2xl font-bold font-heading text-primary mb-4 transition-colors duration-500">Services Offered</h3>
            <ul className="space-y-3 text-text-secondary list-disc list-inside">
              <li>Comprehensive Diagnostics</li>
              <li>Advanced Surgical Procedures</li>
              <li>Chronic Disease Management</li>
              <li>Preventative Care & Screening</li>
              <li>Rehabilitation Services</li>
              <li>Patient Counseling</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Doctors in this department */}
      {departmentDoctors.length > 0 && (
        <section className="section-padding bg-secondary transition-colors duration-500">
          <div className="container-custom">
            <h2 className="text-3xl font-bold font-heading text-center mb-12 text-primary transition-colors duration-500">Our {name} Specialists</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {departmentDoctors.map((doctor) => (
                <motion.div
                  key={doctor.id}
                  className="card text-center"
                  whileHover={{ y: -5 }}
                >
                  <img src={doctor.image} alt={doctor.name} className="w-32 h-32 rounded-full mx-auto mt-6 border-4 border-secondary transition-colors duration-500" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{doctor.name}</h3>
                    <p className="text-accent font-semibold transition-colors duration-500">{doctor.specialty}</p>
                    <p className="text-text-secondary text-sm mt-2">{doctor.bio.substring(0, 80)}...</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageWrapper>
  );
};

export default DepartmentDetail;
