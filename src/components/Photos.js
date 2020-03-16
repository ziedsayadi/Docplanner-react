import React from "react";

const thePhotos = [
  {
    image: "https://www.docplanner.com/images/warsaw.png",
    link1: "Warsaw"
  },
  {
    image: "https://www.docplanner.com/images/barcelona.png",
    link1: "Barcelona"
  },
  {
    image: "https://www.docplanner.com/images/istanbul.png",
    link1: "Istanbul"
  },
  {
    image: "https://www.docplanner.com/images/rome.png",
    link1: " Rome"
  },
  {
    image: "https://www.docplanner.com/images/mexico-city.png",
    link1: " Mexico city"
  },
  {
    image: "https://www.docplanner.com/images/curitiba.png",
    link1: "  Curitiba"
  }
];
function Photos(props) {
  let tab = [];
  tab = thePhotos.map((obj, i) => (
    <div el={i} className="countries-info">
      <a href="">
        <img src={obj.image} />
      </a>
      <div className="link">
        <a className="countries-link" href="">
          {obj.link1}
        </a>

        <a href="#">
          {" "}
          <span>SEE OPENINGS</span>
        </a>
      </div>
    </div>
  ));
  return tab;
}
export default Photos;