import React from 'react';
import Footer from './Footer';


const servicesData = [
  { title: "Primary Care", description: "Doctors that ensure your overall wellness", icon: "🩺" },
  { title: "Surgical Services", description: "Surgical treatments in all medical specialties", icon: "🔪" },
  { title: "Women's Health", description: "Purpose-built facilities for all your needs", icon: "👩" },
  { title: "Heart & Vascular Services", description: "A complete approach to help your heart", icon: "❤️" },
  { title: "Gastrointestinal Health", description: "Care for stomach issues, pancreas to liver transplants", icon: "🫃" },
  { title: "Spine & Ortho", description: "Advance treatment by orthopedic specialists & surgeons", icon: "🦴" },
  { title: "Interventional Radiology", description: "Innovative image-guided procedures and treatments", icon: "🖼️" },
  { title: "Cancer Center", description: "Personalized cancer care at every step", icon: "🎗️" },
  // { title: "Explore More Services at DHMC", description: "Find help for other health issues", icon: "➕" }
];

const ServiceCard = ({ title, description, icon }) => (
  <div className="service-card">
    <div className="service-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Services = () => (
  <div className="services-container">
    <h2>Our Services</h2>
    <p className="services-description">
      We understand that the health needs of every patient are different, which is why at Doctors Hospital we cover almost all specialties under one roof. Here are some of the health services we offer our patients.
    </p>
    <div className="services-grid">
      {servicesData.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          icon={service.icon}
        />
      
      ))}
    </div>
  </div>
  
);

export default Services;
