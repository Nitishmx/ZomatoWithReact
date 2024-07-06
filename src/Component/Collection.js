import React from "react";
import "./Collection.css";
import Collection1 from "../Data/CollectionData";
function Collection() {
  return (
    <div>
      <section class="second-section">
        <div class="collection-part">
          <div class="collection-containt">
            <h1>Collections</h1>
            <p>
              Explore curated lists of top restaurants, cafes, pubs, and bars in
              Bhopal, based on trends
            </p>
          </div>
        </div>
      </section>
      <section class="boxlist">
        <div class="parent-card">
          {Collection1.map((value) => {
            return (
              <div class="fistcard1">
                <img src={value.image} alt="" class="imagecardfist" />
                <div class="cardpara">
                  <p>{value.firstpara}</p>
                  <p>{value.secondpara}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Collection;
