import React from "react";
import Tick from '../images/Tick.png';

export default function Launch({textContent, dispName}) {
  return (
    <React.Fragment>
      <img className="tick-image" src={Tick} alt="Tick logo" />

      <h2 className="heading-text">{textContent.header} {dispName}!</h2>
      <span className="sub-text">{textContent.subText}</span>

      <button className="button-style launch-button">Launch Eden</button>
    </React.Fragment>
  )
}