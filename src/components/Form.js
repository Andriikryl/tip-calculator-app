import React from "react";
import DollarIcon from "../images/icon-dollar.svg";
import PersonIcon from "../images/icon-person.svg";
export const Form = () => {
  return (
    <div className="form">
      <div className="label-group">
        <label className="label" htmlFor="bill">
          Bill
        </label>
        <input type="number" id="bill" />
        <img src={DollarIcon} aria-hidden="true" className="icon"></img>
      </div>

      <div className="tip-section">
        <p className="label">Selected tip %</p>
        <div className="tip-amount-wrapper">
          <div className="tip-amount">
            <input type="radio" name="tip" value=".05" />
            <div className="tip-btn">5%</div>
          </div>
          <div className="tip-amount">
            <input type="radio" name="tip" value=".01" />
            <div className="tip-btn">10%</div>
          </div>
          <div className="tip-amount">
            <input type="radio" name="tip" value=".15" />
            <div className="tip-btn">15%</div>
          </div>
          <div className="tip-amount">
            <input type="radio" name="tip" value=".25" />
            <div className="tip-btn">25%</div>
          </div>
          <div className="tip-amount">
            <input type="radio" name="tip" value=".5" />
            <div className="tip-btn">50%</div>
          </div>
          <input type="number" className="true" />
        </div>
      </div>

      <div className="label-group">
        <div className="label-wrapper">
          <label htmlFor="people">Number of people</label>
          <p>Errror</p>
        </div>
        <input type="number" id="people" />
        <img src={PersonIcon} aria-hidden="true" className="icon"></img>
      </div>
    </div>
  );
};
