
import React from "react";
import Header from "../pages/Header";
import Services from "./Services";
import Aboutus from "./Aboutus";
import Footer from './Footer'
import Contact from "./Contact";


const Home = () => {
  return (
    <>
      <Header />
      <Services/>
      <Aboutus/>
      <Contact/>
      <Footer/>
      
      
    </>
  );
};

export default Home;