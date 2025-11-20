import React, { useEffect } from 'react';
import PageWrapper from '../components/PageWrapper';
import { useTheme } from '../context/ThemeContext';
import { FaHeartbeat, FaFlask, FaUserClock, FaFileMedical, FaShippingFast, FaQuestionCircle } from 'react-icons/fa';

const servicesList = [
  { title: "Advanced Diagnostics", description: "State-of-the-art imaging and lab services for accurate diagnoses.", icon: FaFlask },
  { title: "Surgical Services", description: "A wide range of surgical procedures from minimally invasive to complex surgeries.", icon: FaHeartbeat },
  { title: "Chronic Disease Management", description: "Personalized care plans to manage long-term health conditions.", icon: FaUserClock },
  { title: "Preventive Health Checkups", description: "Comprehensive health packages to proactively manage your well-being.", icon: FaFileMedical },
  { title: "Telemedicine Consultations", description: "Consult with our specialists from the comfort of your home.", icon: FaShippingFast },
  { title: "Mental Health & Counseling", description: "Confidential and compassionate support for your mental well-being.", icon: FaQuestionCircle }
];

const Services = () => {
    const { setTheme } = useTheme();
    useEffect(() => {
        setTheme('general');
    }, [setTheme]);

  return (
    <PageWrapper>
      <div className="bg-secondary transition-colors duration-500">
        <div className="container-custom py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary">
            Comprehensive Medical Services
          </h1>
          <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto">
            Delivering a full spectrum of healthcare services with a commitment to excellence and patient-centered care.
          </p>
        </div>
      </div>

      <div className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-3">{service.title}</h3>
                <p className="text-text-secondary">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Symptom Checker Section */}
      <div className="section-padding bg-secondary transition-colors duration-500">
        <div className="container-custom text-center">
            <h2 className="text-3xl font-bold font-heading">Not Sure What's Wrong?</h2>
            <p className="text-text-secondary my-4 max-w-2xl mx-auto">Use our interactive Symptom Checker tool to get a better understanding of your health concerns. This tool is for informational purposes only and does not substitute professional medical advice.</p>
            <button className="btn-primary">Launch Symptom Checker</button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Services;
