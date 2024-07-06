import React from "react";
import './ExporeOption.css'
function ExporeOption() {
  return (
    <div>
      <section className="explore">
        <h1>Explore options near me</h1>
        <div>
          <select className="explore-select">
            <option selected>
              Bakery food near meBeverages food near meBiryani
            </option>
          </select>
        </div>
        <div>
          <select className="explore-select">
            <option selected>Bakeries near meBars near me</option>
          </select>
        </div>
        <div>
          <select className="explore-select">
            <option selected>Burger king</option>
          </select>
        </div>
        <div>
          <select className="explore-select">
            <option selected>
              Bakery food near meBeverages food near meBiryani
            </option>
          </select>
        </div>
      </section>
    </div>
  );
}

export default ExporeOption;
