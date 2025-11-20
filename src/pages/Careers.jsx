import React, { useEffect } from 'react';
import PageWrapper from '../components/PageWrapper';
import { useTheme } from '../context/ThemeContext';
import { FaUserMd, FaPlus, FaBriefcaseMedical } from 'react-icons/fa';

const jobOpenings = [
    { title: 'Registered Nurse (RN)', department: 'Cardiology', type: 'Full-time' },
    { title: 'Medical Lab Technician', department: 'Diagnostics', type: 'Full-time' },
    { title: 'Pediatrician', department: 'Pediatrics', type: 'Part-time' },
    { title: 'Hospital Administrator', department: 'Management', type: 'Full-time' },
];

const Careers = () => {
    const { setTheme } = useTheme();
    useEffect(() => {
        setTheme('general');
    }, [setTheme]);

  return (
    <PageWrapper>
      <div className="bg-secondary transition-colors duration-500">
        <div className="container-custom py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary">
            Careers at Shifa
          </h1>
          <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto">
            Join our team of dedicated professionals and make a difference in people's lives.
          </p>
        </div>
      </div>
      
      <div className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Current Openings</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <p className="text-text-secondary">{job.department} &middot; {job.type}</p>
                </div>
                <button className="btn-primary">Apply Now</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Careers;
