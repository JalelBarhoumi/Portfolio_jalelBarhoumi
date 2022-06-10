import React from 'react'
import './Contact.css'
import {MdOutlineEmail}from 'react-icons/md' 
import{RiMessengerLine}from 'react-icons/ri'
import{BsWhatsapp}from 'react-icons/bs'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2> Contact Me</h2>
      <div className="container    contact__container">
        <div className="contact__options">
        <article className="contact__option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>jalel.barhoumi@esprit.tn</h5>
            <a href='mailto:jalel.barhoumi@esprit.tn'target="blanck">Send a message</a>
          </article> 
        <article className="contact__option">
            <RiMessengerLine />
            <h4>Messanger</h4>
            <h5>Jalel Barhoumi</h5>
            <a href='https://m.me/profile.php?id=100005304675012'target="blanck">Send a message</a>
          </article>
          
          <article className="contact__option">
            <BsWhatsapp/>
            <h4>WhatsApp</h4>
            <h5>+21623234701</h5>
            <a href='https://api.whatsapp.com/send?phone=+21623234701'target="blanck">Send a message</a>
          </article>
        </div>
        <form action=''></form>
      </div>
    </section>
  )
}

export default Contact