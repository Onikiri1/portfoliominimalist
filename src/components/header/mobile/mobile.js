import React from "react";
import "./mobile.css";
import { BiWindowClose } from "react-icons/bi";
import {BiPaint , BiMailSend,BiPalette} from 'react-icons/bi'
import {RiMapPinUserFill} from 'react-icons/ri'

function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div className="closeicon" onClick={() => setIsOpen(!isOpen)}>
        <BiWindowClose />
      </div>
      <div className="mobileoptions">
        <div className="mobileoption">
          <a href="#habiliades">
            <BiPaint className="oicon" /> Habilidades
          </a>
        </div>
        <div className="mobileoption">
          <a href="#portfolio">
            <BiPalette className="oicon" /> Portfolio
          </a>
        </div>
        <div className="mobileoption">
          <a href="#contacto">
            <BiMailSend className="oicon" /> Contacto
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
