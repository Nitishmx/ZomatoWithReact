import React from "react";
import './Collection.css'
import DataPopular from "../Data/PopularData";

function Popular() {
  return (
    <div>
      <section class="popular">
        <h1>Popular localities in and around Bhopal</h1>
        <div class="box-create-part">
        {DataPopular.map((item,index)=>{
            {/* console.log(item) */}
            return(
          <div class="rectangle-box" key={index}>
            
              <h1>{item.name}</h1>
              <p>{item.number}  places</p>
            
          </div>

            )
        })}
        </div>
      </section>
    </div>
  );
}

export default Popular;
