import React from "react";
import "./ClickOpenCOLLECTION.css";
function ClickOpenCOLLECTION() {
  return (
    <div>
      <nav className="navbar11">Name
        <img
          src="image/b40b97e677bc7b2ca77c58c61db266fe1603954218.avif"
          alt=""
          id="iconzomato4"
        />
        <div className="inputstyle">"inputstyling"
          <ion-icon name="location-outline" id="iconlocation"></ion-icon>
          <select name="" id="bhopal">
            <label for="go">Bhopal</label>
            <option value="go">Bhopal</option>
            <label for="go1">Bihar</label>
            <option value="go1">Bihar</option>
            <label for="go2">Mumbai</label>
            <option value="go2">Mumbai</option>
          </select>
          <ion-icon name="search-outline" id="iconsearch"></ion-icon>
          <input
            type="text"
            name=""
            id="inputfill"
            className="input11"
            placeholder="Search for restaurant, cuisine or a dish"
          />
        </div>
        <div className="logingparr">
          <p className="logingbutton">Log in</p>
          <p className="signbutton">Sign up</p>
        </div>
      </nav>
    </div>
  );
}

export default ClickOpenCOLLECTION;
