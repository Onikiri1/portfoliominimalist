import React from "react";
import "./about.css";
import Logo from "../../../assets/Logo.png";
import SocialContact from "../../common/socialcontact/socialcontact";

function about() {
  return (
    <div className="about">
      <div className="aboutop">
      <div className="aboutphoto">
          <img src={Logo} alt="LOGO" className="picture" />
        </div>
        <div className="aboutinfo">
          Hola!, soy Onikiri
          <br />
          <span className="infoname">Editor, Motion Designer <br/> y Entusiasta 3D</span>
        </div>
       <div className="rede">
        <SocialContact/>
        </div> 
      </div>
      
    </div>
  );
}

export default about;
