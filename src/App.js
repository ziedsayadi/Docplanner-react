import React from 'react';
import logo from './logo.svg';
import Navmenue from "./components/Navmenue"
import style from './Style.css';
import Section1 from "./components/Section1"
import Patient from "./components/Patient"
import Section3 from "./components/Section3"
import Section4 from "./components/Section4"
import Section5 from "./components/Section5"
import Section6 from "./components/Section6"
import Footer from "./components/Footer"




function App() {
  return (
    <div>
      
      <Navmenue/>     
      <Section1 />
      <div className="cards">
      <Patient/>
      </div>
      <Section3 />
      <Section4 />
      <Section5 />

      <Section6 />
      <Footer/>
            
    </div>
    
  );
}

export default App;