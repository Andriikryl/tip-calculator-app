import React from "react";

export const Display = () => {
  return (
    <div>
      <div className="display-row">
        <div>
          <div className="display-label">
            <p className="">tip amount</p>
            <p className="unit">pperson</p>
          </div>
          <div className="display-amt">
            <p className="value">$0.00</p>
          </div>
          <div className="display-label">
            <p className="">tip amount</p>
            <p className="unit">pperson</p>
          </div>
          <div className="display-amt">
            <p className="value">$0.00</p>
          </div>
        </div>
        <button className="btn">reset</button>
      </div>
    </div>
  );
};
