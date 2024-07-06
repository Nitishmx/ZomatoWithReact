import React from 'react'
import './NavThem.css'
import { FaMapMarkerAlt } from 'react-icons/fa';
function NavThem() {
  return (
    <div>
          <div class="middlePart-containt">
            <img
              src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
              alt=""
              className="zomatoicon"
            />
            {/* <p class="para">Discover the best food & drinks in Bhopal</p>
            <div className="inputstyle">
            <LocationIcon/>
              <ion-icon name="location-outline" className="iconlocation"></ion-icon>
              <select name="" className="bhopal">
                <label for="go">Bhopal</label>
                <option value="go">Bhopal</option>
                <label for="go1">Bihar</label>
                <option value="go1">Bihar</option>
                <label for="go2">Mumbai</label>
                <option value="go2">Mumbai</option>
              </select>
              <ion-icon name="search-outline" className="iconsearch"></ion-icon>
              <input
                type="text"
                name=""
                className="inputfill"
                placeholder="Search for restaurant, cuisine or a dish"
              />
            </div> */}
          </div>
    </div>
  )
}

export default NavThem


function LocationIcon() {
  return <FaMapMarkerAlt className="text-red-600 text-4xl mr-2"/>;
}
