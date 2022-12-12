import React from 'react'
import './web.css'
import {BiPaint , BiMailSend,BiPalette} from 'react-icons/bi'
import {RiMapPinUserFill} from 'react-icons/ri'

function Web() {
  return (
    <div className='web'>
      <div className='weboption'>
        <a href='#habilidades' >
        <BiPaint className='optionicon'/>
        </a>
      </div>
      <div className='weboption'>
        <a href='#portfolio' >
        <BiPalette className='optionicon'/>
        </a>
      </div>
      <div className='weboption'>
        <a href='#contacto' >
        <BiMailSend className='optionicon'/> 
        </a>
      </div>
    </div>
  )
}

export default Web