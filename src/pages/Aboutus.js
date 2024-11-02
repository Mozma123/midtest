// import React from 'react';


// const professionals = [
//   { name: "Dr. Shazia Fawad", experience: 9, specialty: "General Physician", rating: 4.4 
// },
//   { name: "Dr. Naghmi Majeed", experience: 7, specialty: "General Physician", rating: 4.3 },
//   { name: "Dr. Umaira Ali", experience: 7, specialty: "General Physician", rating: 4.8 },
//   { name: "Khizra Rasheed", experience: 8, specialty: "General Physician", rating: 4.2 },
//   { name: "Dr. Ayesha Khan", experience: 6, specialty: "General Physician", rating: 4.3 },
//   { name: "Aisha Sehrish", experience: 15, specialty: "General Physician", rating: 4.8 },
//   { name: "Test Doctor", experience: 0, specialty: "Cardiologist, General Physician", rating: 4.1 },
//   { name: "Dr. Hafsa Iftikhar", experience: 5, specialty: "General Physician", rating: 4.8 },
// //   { name: "Dr. Kinza Sadaf", experience: 5, specialty: "General Physician", rating: 4.8 }
// ];

// function Aboutus() {
//   return (
//     <div className="App">
//       <h1>Meet our Healthcare Professionals</h1>
//       <div className="cards-container">
//         {professionals.map((prof, index) => (
//           <div key={index} className="card">
//             <div className="profile-pic"></div> {/* Placeholder for profile picture */}
//             <h2>{prof.name}</h2>
//             <p>{prof.experience} years experience</p>
//             <p>{prof.specialty}</p>
//             <p>⭐ {prof.rating}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Aboutus;


// Card.js
import React from 'react';

// Sample data with image URLs
const professionals = [
  {
    name: "Dr. Shazia Fawad",
    experience: 9,
    specialty: "General Physician",
    rating: 4.4,
    imageUrl: "/images/1.JFIF " // Replace with actual path or URL
  },
  {
    name: "Dr. Naghmi Majeed",
    experience: 7,
    specialty: "General Physician",
    rating: 4.3,
    imageUrl: "/images/2.JFIF"
  },
  {
    name: "Dr. Umaira Ali",
    experience: 7,
    specialty: "General Physician",
    rating: 4.8,
    imageUrl: "/images/3.JFIF "
  },
  {
    name: "Khizra Rasheed",
    experience: 8,
    specialty: "General Physician",
    rating: 4.2,
    imageUrl: "/images/4.JFIF"
  },
  {
    name: "Dr. Ayesha Khan",
    experience: 6,
    specialty: "General Physician",
    rating: 4.3,
    imageUrl: "/images/5.JFIF"
  },
  {
    name: "Aisha Sehrish",
    experience: 15,
    specialty: "General Physician",
    rating: 4.8,
    imageUrl: "/images/6.JFIF"
  },
  {
    name: "Test Doctor",
    experience: 0,
    specialty: "Cardiologist, General Physician",
    rating: 4.1,
    imageUrl: "/images/7.JFIF"
  },
  {
    name: "Dr. Hafsa Iftikhar",
    experience: 5,
    specialty: "General Physician",
    rating: 4.8,
    imageUrl: "/images/8.JFIF"
  }
];

function Aboutus() {
  return (
    <div className="App">
      <h1>Meet our Healthcare Professionals</h1>
      <div className="cards-container">
        {professionals.map((prof, index) => (
          <div key={index} className="card">
            <img src={prof.imageUrl} alt={prof.name} className="profile-pic" />
            <h2>{prof.name}</h2>
            <p>{prof.experience} years experience</p>
            <p>{prof.specialty}</p>
            <p>⭐ {prof.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Aboutus;
