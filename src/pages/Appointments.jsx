import React, { useState, useEffect } from 'react';
import PageWrapper from '../components/PageWrapper';
import { useTheme } from '../context/ThemeContext';
import { FaUser, FaEnvelope, FaPhone, FaCalendar, FaClock, FaStethoscope } from 'react-icons/fa';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', department: '', date: '', time: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Data:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center p-8 bg-green-100 border border-green-400 text-green-700 rounded-lg">
        <h3 className="text-2xl font-bold">Thank You!</h3>
        <p>Your appointment request has been submitted successfully. We will contact you shortly to confirm.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="relative">
        <FaUser className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400" />
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} value={formData.name} className="form-input pl-12" required />
      </div>
      <div className="relative">
        <FaEnvelope className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400" />
        <input type="email" name="email" placeholder="Email Address" onChange={handleChange} value={formData.email} className="form-input pl-12" required />
      </div>
      <div className="relative">
        <FaPhone className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400" />
        <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} value={formData.phone} className="form-input pl-12" required />
      </div>
      <div className="relative">
        <FaStethoscope className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400" />
        <select name="department" onChange={handleChange} value={formData.department} className="form-input pl-12 appearance-none" required>
          <option value="">Select Department</option>
          <option value="general">General Medicine</option>
          <option value="cardiology">Cardiology</option>
          <option value="pediatrics">Pediatrics</option>
          <option value="dermatology">Dermatology</option>
        </select>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative">
          <FaCalendar className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400" />
          <input type="date" name="date" onChange={handleChange} value={formData.date} className="form-input pl-12" required />
        </div>
        <div className="relative">
          <FaClock className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400" />
          <input type="time" name="time" onChange={handleChange} value={formData.time} className="form-input pl-12" required />
        </div>
      </div>
      <button type="submit" className="w-full btn-primary">Request Appointment</button>
    </form>
  );
};


const Appointments = () => {
    const { setTheme } = useTheme();
    useEffect(() => {
        setTheme('general');
    }, [setTheme]);

  return (
    <PageWrapper>
      <div className="bg-secondary transition-colors duration-500">
        <div className="container-custom py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary">
            Book an Appointment
          </h1>
          <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto">
            Schedule your visit with us online. It's fast, easy, and convenient.
          </p>
        </div>
      </div>
      
      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-2xl">
            <h2 className="text-2xl font-bold font-heading text-center mb-8">Appointment Request Form</h2>
            <AppointmentForm />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Appointments;
