import React, { useState, useEffect } from 'react';
import PageWrapper from '../components/PageWrapper';
import { useTheme } from '../context/ThemeContext';
import { FaUser, FaLock } from 'react-icons/fa';

const PatientPortal = () => {
    const { setTheme } = useTheme();
    useEffect(() => {
        setTheme('general');
    }, [setTheme]);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'patient' && password === 'password123') {
            alert('Login successful! (Demo)');
            setError('');
        } else {
            setError('Invalid username or password.');
        }
    };

    return (
        <PageWrapper>
            <div className="bg-secondary transition-colors duration-500">
                <div className="container-custom py-24 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary">
                        Patient Portal
                    </h1>
                    <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto">
                        Access your health records, lab reports, and communicate with your doctor securely.
                    </p>
                </div>
            </div>

            <div className="section-padding">
                <div className="container-custom flex justify-center">
                    <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-bold text-center mb-6">Secure Login</h2>
                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="relative">
                                <FaUser className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Username or Patient ID"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="form-input pl-12"
                                    required
                                />
                            </div>
                            <div className="relative">
                                <FaLock className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400" />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="form-input pl-12"
                                    required
                                />
                            </div>
                            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                            <div className="flex items-center justify-between">
                                <a href="#" className="text-sm text-primary hover:underline">Forgot Password?</a>
                            </div>
                            <button type="submit" className="w-full btn-primary">
                                Login
                            </button>
                            <p className="text-center text-sm text-text-secondary">
                                Don't have an account? <a href="#" className="font-semibold text-primary hover:underline">Register Now</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default PatientPortal;
