import React, { useRef } from "react";
import "./contact.css";
import Separator from "../../common/separator/separator.js";
import SocialContact from "../../common/socialcontact/socialcontact";
import {BiMailSend} from 'react-icons/bi'

function Contact() {
  return (
    <div className="contact">
      <Separator />
    <label className="sectitle">Contacto</label>
    <div className="socials">
    <p className="text1">Encuentrame aqui o enviame un correo.</p>
    <SocialContact/>
    <div className="boton">
      <a href='mailto:onikiriwrk@gmail.com'>
        <BiMailSend className="botone"/>
      </a>
     </div>
    </div>
    </div>
  );
}

export default Contact;
