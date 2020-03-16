import React from 'react'
import Choix from "./Choix";

const CardService = [{
  title: "For patients",
  description: "Find a doctor, book a visit and solve any health-related doubt",
  image: "https://www.docplanner.com/img/screen-marketplace@2x.png" ,
  bgcolor:"#00ccb1",
  isshown: true
},
 {
  title: "For doctors",
  description: "Save time managing visits and  cut no-shows by half ",
  image: "https://www.docplanner.com/img/screen-saas@2x.png",
  bgcolor:"#3d83df",
  isshown: false
}];

function Patient() {
  let tab = [];
  tab = CardService.map((el, i) => (
    <div
      key={i}
      className="cardd"
      style={{ backgroundColor: el.bgcolor }}
    >
      <h1 className="healthcareTitle">{el.title} </h1>
      <p className="healthcareDescription">{el.description}</p>
      <p className="select">{el.isshown && <Choix />} </p>
      <img src={el.image} alt="image" className="service-card-image" />
    </div>
  ));
  return tab;
}


export default Patient
