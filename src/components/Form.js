import React from "react";
import DollarIcon from "../images/icon-person.svg";
export const Form = () => {
  return (
    <div className="form">
      <div className="label-group">
        <label htmlFor="bill">Bill</label>
        <input type="number" id="bill" />
        <label htmlFor="people">Bill</label>
        <img src={DollarIcon} aria-hidden="true" className="icon"></img>
      </div>

      <div className="label-group">
        <label htmlFor="people">Bill</label>
        <input type="number" id="people" />
      </div>
    </div>
  );
};
