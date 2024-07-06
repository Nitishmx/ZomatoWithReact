import React from "react";
import NavBar from "../Component/NavBar";
import OrderOnline from "../Component/OrderOnline";
import Collection from "../Component/Collection";
import Popular from "../Component/Popular";
import ZomatoApp from "../Component/ZomatoApp";
import ExporeOption from "../Component/ExporeOption";
import FooterPart from "../Component/FooterPart";
import SignUp from "../Component/SignUp";
import Login from "../Component/Login";
import ClickOpenCOLLECTION from "../Component/ClickOpenCOLLECTION.JS";
function AllComponent() {
  return (
    <div>
      <NavBar />
      <OrderOnline />
      <Collection />
      <Popular />
      <ZomatoApp />
      <ExporeOption />
      <FooterPart />
      <SignUp />
      <Login />
    </div>
  );
}
export default AllComponent;
