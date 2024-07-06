import React from 'react'
import './ZomatoApp.css'
function ZomatoApp() {
  return (
    <div>
    <section className="zomatoapp">
    <div className="midspace">
      <span className="mobilesection">
        <img src="https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png" className="mobileimage"/>
        <div className="zomatoappleft">
          <h1>Get the Zomato app</h1>
          <div className="mobilpara">
            <p>We will send you a link, open it on your phone to download </p>
            <span>the app</span>
          </div>
          <div className="inputratio">
            <div>
              <input type="radio" name="first"/>
              <label for="email">Email</label>
            </div>
          <div>
            <input type="radio" name="first"/>
            <label for="P">Phone</label>
          </div>
           
          </div>
          <div className="inputemail-button">
            <input type="text" name="" className="inputemail" placeholder="Email"/>
            <button>Share App Link</button>
          </div>
          <p className="downloadpara">Download app from</p>
          <div className="twobutton">
            
              <img src="image/23e930757c3df49840c482a8638bf5c31556001144.webp" alt="" id="firstbutton"/>

            
            
              <img src="image/9f0c85a5e33adb783fa0aef667075f9e1556003622.webp" alt="" id="secondbutton"/>

            
          </div>
        </div>
      </span>
    </div>
  </section>
</div>
  )
}

export default ZomatoApp