import "../scss/Fyd.scss";
import {useNavigate}from "react-router-dom";
import html5 from "../images/HTML5.png";
import css3 from "../images/CSS3.png";
import js from "../images/js.png";
import react from "../images/React.svg";
import node from "../images/node.png";
import mysql from "../images/mysql.png";
import github from "../images/github.png";


function Fyd() {
  const navigate= useNavigate(); //Hook para navegar programáticamente

  const gotToHome =() =>{
    navigate("/");
  };
  return (
    <section className="equipo">
    <div className="equipo__container">
      <h3>HÁBILIDADES TÉCNICAS</h3>
      <figure className="figure">
        <img className="figure__img" src={html5} alt="logo de html5" />
        <img className="figure__img" src={css3} alt="logo de css3" />
        <img className="figure__img" src={js} alt="logo de javascript" />
        <img className="figure__img" src={react} alt="logo de reactjs" />
        <img className="figure__img" src={node} alt="logo de nodejs" />
        <img className="figure__img" src={mysql} alt="log de mysql" />
        <img className="figure__img" src={github} alt="logo de github" />
    </figure>
      <div className="equipo__box"></div>
    </div>
    <div className="fyd">
      <article className="fortalezas">
        <h4>Fortalezas</h4>
        <p>Resolutiva</p>
        <p>Metódica</p>
        <p>Disposición absoluta para trabajar</p>
        <p>Responsable </p>
        <p>Creativa </p>
      </article>
      <article className="debilidades">
        <h4>Debilidades</h4>
        <p>Perfeccionista</p>
        <p>Impaciente</p>
        <p>Autocrítica</p>
        <p>Ansiosa</p>
        
      </article>
    </div>
    <button onClick={gotToHome} className="button">HOME</button>
  </section>
  
  )
}

export default Fyd;