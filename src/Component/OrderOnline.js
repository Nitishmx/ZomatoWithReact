import React from "react";
import './OrderOnline.css'
import order from "../Data/OrderData";
function OrderOnline() {

    let iteam=order.map((value)=>{
        return(
    
        <div className="first-car">
        
          <img
          src={value.image}
          alt=""
          className="firscardimage"
        />
       
        <p class="firstparacard">{console.log("hye ")}</p>
        <p class="secondparacard">{value.style}</p>
      </div>
        )
    
      })
  return (
    <div>
      <section className="sele">
        <div className="car-box">{iteam}</div>
      </section>
    </div>
  );
}

export default OrderOnline;
