import { FaHeartbeat, FaBaby, FaUserMd, FaStethoscope, FaBrain, FaBone, FaAllergies } from 'react-icons/fa';
import { GiKidneys, GiLungs } from 'react-icons/gi';

export const departments = [
  { id: 'general-medicine', name: 'General Medicine', theme: 'general', icon: FaStethoscope, description: 'Comprehensive primary care for adults.', image: '/images/general.jpg' },
  { id: 'pediatrics', name: 'Pediatrics', theme: 'pediatrics', icon: FaBaby, description: 'Specialized medical care for infants, children, and adolescents.', image: '/images/pediatrics.jpg' },
  { id: 'cardiology', name: 'Cardiology', theme: 'cardiology', icon: FaHeartbeat, description: 'Diagnosis and treatment of heart diseases and conditions.', image: '/images/cardiology.jpg' },
  { id: 'dermatology', name: 'Dermatology', theme: 'dermatology', icon: FaAllergies, description: 'Care for skin, hair, and nail conditions.', image: '/images/dermatology.jpg' },
  { id: 'emergency', name: 'Emergency Care', theme: 'emergency', icon: FaUserMd, description: 'Immediate medical services for acute illnesses or injuries.', image: '/images/emergency.jpg' },
  { id: 'neurology', name: 'Neurology', theme: 'general', icon: FaBrain, description: 'Treatment of disorders of the nervous system.', image: '/images/neurology.jpg' },
  { id: 'orthopedics', name: 'Orthopedics', theme: 'general', icon: FaBone, description: 'Care for the musculoskeletal system, including bones and joints.', image: '/images/orthopedics.jpg' },
  { id: 'nephrology', name: 'Nephrology', theme: 'general', icon: GiKidneys, description: 'Specializing in kidney care and diseases.', image: '/images/nephrology.jpg' },
  { id: 'pulmonology', name: 'Pulmonology', theme: 'general', icon: GiLungs, description: 'Focus on diseases of the respiratory tract.', image: '/images/pulmonology.jpg' },
];

export const doctors = [
  { id: 1, name: 'Dr. Evelyn Reed', specialty: 'Cardiology', image: 'https://i.pravatar.cc/300?img=1', bio: 'Dr. Reed is a board-certified cardiologist with over 15 years of experience in treating complex heart conditions. She is a fellow of the American College of Cardiology.' },
  { id: 2, name: 'Dr. Samuel Chen', specialty: 'Pediatrics', image: 'https://i.pravatar.cc/300?img=2', bio: 'With a passion for children\'s health, Dr. Chen provides compassionate and comprehensive care to his young patients, from newborns to teenagers.' },
  { id: 3, name: 'Dr. Olivia Martinez', specialty: 'Dermatology', image: 'https://i.pravatar.cc/300?img=3', bio: 'Dr. Martinez specializes in both cosmetic and medical dermatology, offering the latest treatments for skin health and aesthetics.' },
  { id: 4, name: 'Dr. Benjamin Carter', specialty: 'General Medicine', image: 'https://i.pravatar.cc/300?img=4', bio: 'As a primary care physician, Dr. Carter is dedicated to building long-term relationships with his patients to manage their overall health.' },
  { id: 5, name: 'Dr. Aisha Khan', specialty: 'Emergency Medicine', image: 'https://i.pravatar.cc/300?img=5', bio: 'Dr. Khan thrives in the fast-paced environment of the ER, providing critical care with precision and empathy.' },
  { id: 6, name: 'Dr. Marcus Holloway', specialty: 'Neurology', image: 'https://i.pravatar.cc/300?img=6', bio: 'Dr. Holloway is a leading expert in neurological disorders, focusing on innovative treatments for conditions like epilepsy and multiple sclerosis.' },
  { id: 7, name: 'Dr. Sophia Loren', specialty: 'Orthopedics', image: 'https://i.pravatar.cc/300?img=7', bio: 'A skilled orthopedic surgeon, Dr. Loren specializes in sports injuries and joint replacement, helping patients regain mobility and live pain-free.' },
  { id: 8, name: 'Dr. Liam Gallagher', specialty: 'Cardiology', image: 'https://i.pravatar.cc/300?img=8', bio: 'Dr. Gallagher focuses on preventative cardiology and cardiac rehabilitation, empowering patients to live heart-healthy lives.' }
];

export const services = [
  { title: 'Symptom Checker', description: 'Use our AI-powered tool to check your symptoms.', icon: 'check' },
  { title: 'Health Library', description: 'Access a vast library of medical information.', icon: 'book' },
  { title: 'Find a Doctor', description: 'Search our directory of world-class physicians.', icon: 'search' },
  { title: 'Book Appointment', description: 'Schedule your next visit with ease online.', icon: 'calendar' },
  { title: 'Emergency Care', description: '24/7 access to emergency medical services.', icon: 'emergency' },
  { title: 'Lab Reports', description: 'View your lab results securely online.', icon: 'lab' },
];

export const blogPosts = [
  { id: 1, title: 'The Importance of a Heart-Healthy Diet', category: 'Cardiology', date: 'June 10, 2024', author: 'Dr. Evelyn Reed', excerpt: 'Discover the key foods and habits that can significantly reduce your risk of heart disease...' },
  { id: 2, title: 'Navigating Childhood Vaccinations', category: 'Pediatrics', date: 'June 8, 2024', author: 'Dr. Samuel Chen', excerpt: 'A comprehensive guide for parents on the recommended vaccination schedule and its importance...' },
  { id: 3, title: 'Top 5 Sunscreen Myths Debunked', category: 'Dermatology', date: 'June 5, 2024', author: 'Dr. Olivia Martinez', excerpt: 'Protect your skin effectively by learning the truth behind common sunscreen misconceptions...' },
  { id: 4, title: 'Annual Check-ups: Your Key to Long-Term Health', category: 'General Medicine', date: 'June 2, 2024', author: 'Dr. Benjamin Carter', excerpt: 'Why your yearly visit to the doctor is more important than you think...' },
];
