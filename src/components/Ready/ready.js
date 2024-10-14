import React from "react";
import "./ready.css";

export const Ready = () => {
  return (
    <div className="ready-container">
      {/* Are you ready section */}
      <div className="ready-content">
        <div className="ready-text">Are you ready ?</div>
        <button className="order-btn">Order now</button>
      </div>

      {/* Footer section */}
      <div className="footer">
        <div className="footer-left">
          <div className="footer-title">Pine Tour.</div>
        </div>
        <div className="footer-right">
          <button className="social-btn">Facebook</button>
          <button className="social-btn">Instagram</button>
        </div>
      </div>
    </div>
  );
};
