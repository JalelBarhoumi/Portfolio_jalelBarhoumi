import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'
import {MdFacebook} from 'react-icons/md'
const Footer = () => {
  return (
    <footer>
      <a href="#"className='footer__logo'>Jalel Barhoumi</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='footer__socials' >
        <a href="https://linkedin.com"target="blank"><BsLinkedin/></a>
        <a href="https://instagram.com"target="blank"><AiOutlineInstagram/></a>
        <a href="https://facebook.com"target="blank"><MdFacebook/></a>
    </div>
    <div className="footer__copyright">
      <small>&copy;JalelBarhoumi, All rights reserved.</small>
    </div>
    </footer>
  )
}

export default Footer