import React from "react";
import CardInfo from "./CardInfo";

const platformInfo = [
  {
    img: "https://www.docplanner.com/img/flag.png",
    title: "Leader in 10 countries",
    info:
      "Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina, and Chile"
  },
  {
    img: "https://www.docplanner.com/img/visits.png",
    title: "1 million appointments",
    info: "booked last month"
  },
  {
    img: "https://www.docplanner.com/img/patients.png",
    title: "30 million unique patients",
    info: "visit us every month"
  },
  {
    img: "https://www.docplanner.com/img/doctors.png",
    title: "2 million active doctors",
    info: "trust in our solutions"
  }
];

function Section4() {
  return (
    <div className="Info">
      <div>
        <h1 className="title-info">
          The world's <br />
          biggest healthcare platform
        </h1>
        <p className="paragraph-info">
          We work from 6 offices all over the world, bringing Docplanner Group
          to life in almost 20 countries.
        </p>
        <img
          src="https://www.docplanner.com/img/logo.png"
          alt="#"
          className="image-info"
        />
      </div>
      <div className="Cardplatform">
        {platformInfo.map((elm, i) => {
          return (
            <CardInfo
              key={i}
              img={elm.img}
              title={elm.title}
              info={elm.info}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Section4;
