import "../scss/Contact.scss";
import {useNavigate}from "react-router-dom";

function Contact() {
  const navigate= useNavigate(); //Hook para navegar programáticamente

  const gotToHome =() =>{
    navigate("/");
  };
  return (

    
    <div className="contact">
        
    <button onClick={gotToHome}>HOME</button>
  </div>
  )
}

export default Contact;