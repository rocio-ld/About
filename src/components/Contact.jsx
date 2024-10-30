import "../scss/Contact.scss";
import {useNavigate}from "react-router-dom";

function Contact() {
  const navigate= useNavigate(); //Hook para navegar programáticamente

  const gotToHome =() =>{
    navigate("/");
  };
  return (

    
    <contact className="contact">
        <div className="socialmedia">
        <a href="#https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
        <a href="#https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
        <a href="#https://x.com/" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></a>
        <a href="#https://www.google.com/intl/es/gmail/about/" target="_blank"><i className="fa-solid fa-envelope"></i></a>
      </div> 
    <h6 className="contact__copyright">Code Sisters © 2018</h6>
    <ul className="contact__list">
      <li>EQUIPO</li>
      <li>QUIÉNES SOMOS </li>
      <li>CONTACTO</li>
    </ul>
    <figure className="contact__figure">
      <img className="contact__figure--logo" src="./images/logo-adalab.png" alt="Logo Adalab" />
    </figure>
    <button onClick={gotToHome}>HOME</button>
  </contact>
  )
}

export default Contact;