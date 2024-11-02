

// //2nd
// // DoctorForm.js
// import React, { useState } from 'react';
// import { db } from '../config/firebase'; // Import Firestore configuration
// import { collection, addDoc } from 'firebase/firestore';

// const DoctorForm = () => {
//   const [doctor, setDoctor] = useState({
//     doctorId: '',
//     name: '',
//     specialization: '',
//     contactInfo: '',
//     schedule: [{ startTime: '', endTime: '', available: true }],
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setDoctor({ ...doctor, [name]: value });
//   };

//   const handleScheduleChange = (index, field, value) => {
//     const updatedSchedule = doctor.schedule.map((slot, i) =>
//       i === index ? { ...slot, [field]: value } : slot
//     );
//     setDoctor({ ...doctor, schedule: updatedSchedule });
//   };

//   const addSlot = () => {
//     setDoctor({
//       ...doctor,
//       schedule: [...doctor.schedule, { startTime: '', endTime: '', available: true }],
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const docRef = await addDoc(collection(db, 'doctors'), doctor);
//       console.log('Document written with ID: ', docRef.id);
//       alert('Doctor information saved successfully!');
//       setDoctor({
//         doctorId: '',
//         name: '',
//         specialization: '',
//         contactInfo: '',
//         schedule: [{ startTime: '', endTime: '', available: true }],
//       });
//     } catch (e) {
//       console.error('Error adding document: ', e);
//     }
//   };

//   return (
//     <form className="doctorForm" onSubmit={handleSubmit}>
//       <h2 className="formTitle">Doctor Signup Form</h2>
//       <label>
//         Doctor ID:
//         <input type="text" name="doctorId" value={doctor.doctorId} onChange={handleChange} required />
//       </label>

//       <label>
//         Name:
//         <input type="text" name="name" value={doctor.name} onChange={handleChange} required />
//       </label>

//       <label>
//         Specialization:
//         <input type="text" name="specialization" value={doctor.specialization} onChange={handleChange} required />
//       </label>

//       <label>
//         Contact Information:
//         <input type="email" name="contactInfo" value={doctor.contactInfo} onChange={handleChange} required />
//       </label>

//       <div className="scheduleSection">
//         <h3>Schedule Slots</h3>
//         {doctor.schedule.map((slot, index) => (
//           <div key={index} className="slot">
//             <label>
//               Start Time:
//               <input
//                 type="datetime-local"
//                 value={slot.startTime}
//                 onChange={(e) => handleScheduleChange(index, 'startTime', e.target.value)}
//                 required
//               />
//             </label>

//             <label>
//               End Time:
//               <input
//                 type="datetime-local"
//                 value={slot.endTime}
//                 onChange={(e) => handleScheduleChange(index, 'endTime', e.target.value)}
//                 required
//               />
//             </label>

//             <label>
//               Available:
//               <select
//                 value={slot.available}
//                 onChange={(e) => handleScheduleChange(index, 'available', e.target.value === 'true')}
//               >
//                 <option value="true">Yes</option>
//                 <option value="false">No</option>
//               </select>
//             </label>
//           </div>
//         ))}
//       </div>

//       <button type="submit" className="submitButton">Submit</button>
//     </form>
//   );
// };

// export default DoctorForm;


// chgahgyg
// DoctorForm.js
import React, { useState } from 'react';
import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';


const DoctorForm = () => {
  const [doctor, setDoctor] = useState({
    doctorId: '',
    name: '',
    specialization: '',
    contactInfo: '',
    schedule: [{ startTime: '', endTime: '', available: true }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor({ ...doctor, [name]: value });
  };

  const handleScheduleChange = (index, field, value) => {
    const updatedSchedule = doctor.schedule.map((slot, i) =>
      i === index ? { ...slot, [field]: value } : slot
    );
    setDoctor({ ...doctor, schedule: updatedSchedule });
  };

  const addSlot = () => {
    setDoctor({
      ...doctor,
      schedule: [...doctor.schedule, { startTime: '', endTime: '', available: true }],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'doctors'), doctor);
      console.log('Document written with ID: ', docRef.id);
      alert('Doctor information saved successfully!');
      setDoctor({
        doctorId: '',
        name: '',
        specialization: '',
        contactInfo: '',
        schedule: [{ startTime: '', endTime: '', available: true }],
      });
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <form className="doctorForm" onSubmit={handleSubmit}>
      <h2 className="formTitle">Doctor Signup Form</h2>

      <label  style={{ marginLeft: '15px' }} >
        Doctor ID:
        <input type="text" name="doctorId" value={doctor.doctorId} onChange={handleChange} required    />
      </label>

      <label style={{ marginLeft: '50px' }} >
        Name:
        <input type="text" name="name" value={doctor.name} onChange={handleChange} required  />
      </label>

      <label style={{ marginLeft: '15px' }}>
        Specialization:
        <input type="text" name="specialization" value={doctor.specialization} onChange={handleChange} required />
      </label>

      <label style={{ marginLeft: '20px' }}>
        Contact Information:
        <input type="email" name="contactInfo" value={doctor.contactInfo} onChange={handleChange} required />
      </label>

      <div className="scheduleSection">
        <h3>Schedule Slots</h3>
        {doctor.schedule.map((slot, index) => (
          <div key={index} className="slot">
            <label>
              Start Time:
              <input
                type="datetime-local"
                value={slot.startTime}
                onChange={(e) => handleScheduleChange(index, 'startTime', e.target.value)}
                required
              />
            </label>

            <label>
              End Time:
              <input
                type="datetime-local"
                value={slot.endTime}
                onChange={(e) => handleScheduleChange(index, 'endTime', e.target.value)}
                required
              />
            </label>

            <label>
              Available:
              <select
                value={slot.available}
                onChange={(e) => handleScheduleChange(index, 'available', e.target.value === 'true')}
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </label>
          </div>
        ))}
        {/* <button type="button" className="addSlotButton" onClick={addSlot}>Add Slot</button> */}
      </div>

      <button type="submit" className="submitButton">Submit</button>
    </form>
  );
};

export default DoctorForm;
