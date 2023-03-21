import React from "react";

export const Display = () => {
  return (
    <div className="display">
      <div className="display-group">
        <div className="display-row">
          <div className="display-label">
            <p className="header">tip amount</p>
            <p className="unit">person</p>
          </div>
          <p className="display-amt">$0.00</p>
        </div>
        <div className="display-row">
          <div className="display-label">
            <p className="header">tip amount</p>
            <p className="unit">person</p>
          </div>
          <p className="display-amt">$0.00</p>
        </div>
      </div>
      <button className="btn">reset</button>
    </div>
  );
};
