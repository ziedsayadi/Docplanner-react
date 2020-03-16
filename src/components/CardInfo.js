import React from "react";

const CardInfo = props => {
  return (
    <div className="CardItem">
      <img src={props.image} alt="" className="" />
      <h4>{props.title}</h4>
      <p>{props.info}</p>
    </div>
  );
};

export default CardInfo;
