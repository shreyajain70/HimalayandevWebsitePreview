import React from "react";

const OurPrice = () => {
  return (
    <>
      <h1 className="price-heading">Our Price</h1>
      <div className="price-appearance">
        <div className="price-card price1">
          1st Offer
          <div className="price-detail">
            <p>Details for 1st Offer: Special discount, valid till July.</p>
          </div>
        </div>
        <div className="price-card price2">
          2nd Offer
          <div className="price-detail">
            <p>Details for 2nd Offer: Buy 1 Get 1 Free.</p>
          </div>
        </div>
        <div className="price-card price3">
          3rd Offer
          <div className="price-detail">
            <p>Details for 3rd Offer: 20% cashback on all purchases.</p>
          </div>
        </div>
        <div className="price-card price4">
          4th Offer
          <div className="price-detail">
            <p>Details for 4th Offer: Free shipping above $50.</p>
          </div>
        </div>
        <div className="price-card price5">
          5th Offer
          <div className="price-detail">
            <p>Details for 5th Offer: Loyalty program benefits.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurPrice;
