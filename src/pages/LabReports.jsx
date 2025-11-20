import React, { useEffect } from 'react';
import PageWrapper from '../components/PageWrapper';
import { useTheme } from '../context/ThemeContext';
import PatientPortal from './PatientPortal'; // Reusing the login form

const LabReports = () => {
    const { setTheme } = useTheme();
    useEffect(() => {
        setTheme('general');
    }, [setTheme]);

  return (
    <PageWrapper>
        <div className="bg-secondary transition-colors duration-500">
            <div className="container-custom py-24 text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary">
                    Access Your Lab Reports
                </h1>
                <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto">
                    Securely view, download, and share your lab results online through our Patient Portal.
                </p>
            </div>
        </div>

        <div className="section-padding">
            <div className="container-custom">
                <p className="text-center text-text-secondary mb-8">Please log in to the Patient Portal to view your reports.</p>
                <div className="flex justify-center">
                    <div className="w-full max-w-md">
                        <PatientPortal />
                    </div>
                </div>
            </div>
        </div>
    </PageWrapper>
  );
};

export default LabReports;
