import React from "react";
import ReactDOM from "react-dom";

let business = {
  imageSrc:
    "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Flavortown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90
};

class Business extends React.Component {
  render() {
    return (
      <div class="Business">
        <div className="image-container">
          <img src={business.this.imageSrc} />
        </div>
        <h2>{business.this.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{business.this.address}</p>
            <p>Bordertown</p>
            <p>
              {business.this.state} {business.this.zipCode}
            </p>
          </div>
          <div className="Business-reviews">
            <h3>{business.this.category}</h3>
            <h3 className="rating">{business.this.rating}</h3>
            <p>{business.this.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
  }
}
