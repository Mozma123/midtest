

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Signup from './pages/Singup'; // Correct spelling of "Signup"
import Navbar from './components/Navbar'; 
import DoctorForm from './pages/DoctorForm'; // Use correct casing
import Services from './pages/Services';
import Patients from './pages/Patients';
import PatientForm from './pages/PatientForm';
import Contact from './pages/Contact';
import Aboutus from './pages/Aboutus';
import Footer from './pages/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login';

function App() {
 

  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/contact" element={<Contact />} />
      <Route path="/footer" element={<Footer />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/Patient" element={<Patients />} />
        <Route path="/PatientForm" element={<PatientForm />} />
        <Route path='/services' element={<Services/>}/>
        <Route path='/doctorForm' element={<DoctorForm />} />
        <Route path='/login' element={<Login />} />
        <Route path='/aboutus' element={<Aboutus />} />


      </Routes>
    </Router>
  );
}

export default App;
