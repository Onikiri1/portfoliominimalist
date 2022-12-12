import React from 'react'
import './socialcontact.css'
import {FaInstagram, FaTwitter, FaLinkedin, FaYoutube,FaBehanceSquare} from 'react-icons/fa';

function socialcontact() {
  return (
    <div className='socialcontact'>
        <a href='https://twitter.com/Onikir1' className='socialicon' target="_blank"> <FaTwitter/>
        </a>
        <a href='https://www.instagram.com/onikirii1' className='socialicon' target="_blank"><FaInstagram/></a>
        <a href='https://www.instagram.com/onikirii1' className='socialicon' target="_blank"><FaLinkedin/></a>
        <a href='https://www.youtube.com/onikir1' className='socialicon' target="_blank"><FaYoutube/></a>
        <a href='https://www.behance.net/Onikiri1' className='socialicon' target="_blank"><FaBehanceSquare/></a>
    </div>
    )
}

export default socialcontact
