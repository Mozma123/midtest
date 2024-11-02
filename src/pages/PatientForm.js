// import React, { useState } from 'react';
// import { db } from '../config/firebase';
// import { collection, addDoc } from 'firebase/firestore';
// import { useNavigate } from 'react-router-dom';


// const PatientForm = () => {
//   const navigate = useNavigate()
//   const [name, setName] = useState('');
//   const [contactDetails, setContactDetails] = useState('');
//   const [medicalHistory, setMedicalHistory] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const patientData = {
//       name,
//       contactDetails,
//       medicalHistory,
//     };
//     try {
//       const docRef = await addDoc(collection(db, 'patients'), patientData);
//       setName('');
//       setContactDetails('');
//       setMedicalHistory('');
//       if(docRef){
//         alert('you are registeed')
//         navigate('/login');
//       }
//     } catch (error) {
//       console.error('Error adding document: ', error);
//     }
//   };
  

//   return (
//     <div className="form-container">
//       <h2>Patient Signup Form</h2>
//       <form onSubmit={handleSubmit} className="patient-form">
        
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="contactDetails">Contact Details:</label>
//           <input
//             type="email"
//             id="contactDetails"
//             value={contactDetails}
//             onChange={(e) => setContactDetails(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="medicalHistory">Medical History:</label>
//           <textarea
//             id="medicalHistory"
//             value={medicalHistory}
//             onChange={(e) => setMedicalHistory(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="submit-button">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default PatientForm;
// chatgpt
import React, { useState } from 'react';
import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const PatientForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [contactDetails, setContactDetails] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const patientData = {
      name,
      contactDetails,
      medicalHistory,
    };
    try {
      const docRef = await addDoc(collection(db, 'patients'), patientData);
      setName('');
      setContactDetails('');
      setMedicalHistory('');
      if (docRef) {
        alert('You are registered');
        navigate('/login');
      }
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div 
      className="form-container" 
      style={{
        maxWidth: '500px', 
        margin: '50px auto', 
        padding: '20px', 
        border: '1px solid #ddd', 
        borderRadius: '8px', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
        backgroundColor: '#f9f9f9', 
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <h2 style={{ textAlign: 'center', color: '#333' }}>Patient Signup Form</h2>
      <form onSubmit={handleSubmit} className="patient-form">
        <div className="form-group" style={{ marginBottom: '20px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              width: '100%', 
              padding: '10px', 
              borderRadius: '4px', 
              border: '1px solid #ccc', 
              boxSizing: 'border-box',
              fontSize: '1rem',
            }}
          />
        </div>
        <div className="form-group" style={{ marginBottom: '20px' }}>
          <label htmlFor="contactDetails" style={{ display: 'block', marginBottom: '5px' }}>Contact Details:</label>
          <input
            type="email"
            id="contactDetails"
            value={contactDetails}
            onChange={(e) => setContactDetails(e.target.value)}
            required
            style={{
              width: '100%', 
              padding: '10px', 
              borderRadius: '4px', 
              border: '1px solid #ccc', 
              boxSizing: 'border-box',
              fontSize: '1rem',
            }}
          />
        </div>
        <div className="form-group" style={{ marginBottom: '20px' }}>
          <label htmlFor="medicalHistory" style={{ display: 'block', marginBottom: '5px' }}>Medical History:</label>
          <textarea
            id="medicalHistory"
            value={medicalHistory}
            onChange={(e) => setMedicalHistory(e.target.value)}
            required
            style={{
              width: '100%', 
              padding: '10px', 
              borderRadius: '4px', 
              border: '1px solid #ccc', 
              boxSizing: 'border-box',
              fontSize: '1rem',
              minHeight: '100px',
            }}
          />
        </div>
        <button 
          type="submit" 
          className="submit-button" 
          style={{
            width: '100%', 
            padding: '12px', 
            backgroundColor: '#28a745', 
            color: 'white', 
            fontSize: '1rem', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer', 
            transition: 'background-color 0.3s ease',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PatientForm;
