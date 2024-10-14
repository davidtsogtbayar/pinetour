import React from "react";
import "./pricing.css";

export const Pricing = () => {
  return (
    <div className="pricing-container">
      <div className="pricing-header">PRICING</div>
      <div className="pricing-title">Pricing of Our Agency</div>
      <div className="pricing-cards">
        <div className="pricing-card">
          <div className="pricing-card-title">Starter pack</div>
          <div className="pricing-card-items">
            <div className="pricing-item">Trip</div>
            <div className="pricing-item">Hotel</div>
            <div className="pricing-item">Breakfast</div>
            <div className="pricing-item">Lunch</div>
            <div className="pricing-item">Dinner</div>
          </div>
          <div className="pricing-card-price">2100$</div>
        </div>

        <div className="pricing-card luxury">
          <div className="pricing-card-title">Luxury pack</div>
          <div className="pricing-card-items">
            <div className="pricing-item">Starter pack</div>
            <div className="pricing-item">Flights</div>
            <div className="pricing-item">Cruise trip</div>
            <div className="pricing-item">Cruise trip</div>
          </div>
          <div className="pricing-card-price">4200$</div>
        </div>
      </div>
    </div>
  );
};
