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
        <p></p>
        <p>
          Tenemos una notable capacidad para empatizar con los demás, lo que fomenta un ambiente de apoyo mutuo, donde cada miembro del grupo se siente comprendido y valorado. Además tenemos disposición por trabajar juntas, compartir responsabilidades lo que resulta en un trabajo un equipo eficaz y eficiente. Por ultimo destacar que trabajar en unidad nos permite combinar ideas y perspectivas únicas, lo que a menudo resulta en soluciones creativas e innovadoras para los problemas.
        </p>
      </article>
      <article className="debilidades">
        <h4>Debilidades</h4>
        <p>
          Auntque trabajar en unidad tiene muchas fortalezas, pordría destacar que a veces la comunicación ineficiente puede surgir debido a diferencias en estilos de comunicación, donde algunas pueden ser más directas y otras más reservadas, lo que puede causar malentendidos. También puede haber una distribución desigual del trabajo, donde algunas chicas asumen mas tareas que otras. Por último decir, que la toma de decisiones consensuada, aunque valiosa, puede ser más lenta, especialmente en situaciones donde se requiere una acción rapida.

          Me considero una persona metódica, organizada y
        responsable por resaltar cualidades positivas pero también soy impaciente,
        autocrítica y algo perfeccionista, lo que me mantiene siempre con muchas
        ganas de seguir mejorando laboral pero sobre todo personalmente. Doy mucho
        valor a disfrutar del tiempo libre en familia y amigos, para tener una
        buena salud física y mental y así poder tener equilibrio entre vida
        personal y laboral.
        </p>
      </article>
    </div>
    <button onClick={gotToHome} className="button">HOME</button>
  </section>
  
  )
}

export default Fyd;