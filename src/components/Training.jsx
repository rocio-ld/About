import "../scss/Training.scss";
import {useNavigate}from "react-router-dom";
import diploma1 from "../images/diplomaAdalab.png";
import diploma2 from "../images/diplomacss.png";
import titulo from "../images/formacionreglada.jpg";
import Footer from "./Footer";


function Training() {
  const navigate= useNavigate(); //Hook para navegar programáticamente

  const gotToHome =() =>{
    navigate("/");
  };
  return (

    
    <div className="training">
      <h2 className="training__h2">FORMACIÓN</h2>
      <div>
        <figure className="figure">
          <img src={diploma1} className="img" alt="Diploma Adalab" />
          <img src={diploma2} className="img" alt="Diploma de HTML5 y CSS3" />
          <img src={titulo} className="img" alt="Título Formación Profesional de Administración y Finanzas" />
        </figure>
      </div>
        
    <button onClick={gotToHome} className="button">HOME</button>
    <Footer/>
  </div>
  )
}

export default Training;