import React, { useRef } from 'react';
import './Contact.css'
import {MdOutlineEmail}from 'react-icons/md' 
import{RiMessengerLine}from 'react-icons/ri'
import{BsWhatsapp}from 'react-icons/bs'
import emailjs from'emailjs-com'

const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_slwj4ed', 'template_ronah1r', form.current, 'C6zhRytjHVLEWv9MO')
    e.target.reset()  
    .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2> Contact Me</h2>
      <div className="container    contact__container">
        <div className="contact__options">
        <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>jalel.barhoumi@esprit.tn</h5>
            <a href='mailto:jalel.barhoumi@esprit.tn'target="blanck">Send a message</a>
          </article> 
        <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messanger</h4>
            <h5>Jalel Barhoumi</h5>
            <a href='https://m.me/profile.php?id=100005304675012'target="blanck">Send a message</a>
          </article>
          
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+21623234701</h5>
            <a href='https://api.whatsapp.com/send?phone=+21623234701'target="blanck">Send a message</a>
          </article>
        </div>
        <form ref={form}onSubmit={sendEmail}>
          <input type="text"name="name"placeholder='Your Full Name'required />
          <input type="email"name="email"placeholder='Your Email'requiired/>
          <textarea name="message"rows="7"placeholder='Your Message'required></textarea>
          <button type="submit"className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact