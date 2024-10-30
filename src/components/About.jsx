import "../scss/About.scss";
import {useNavigate}from "react-router-dom";
import historia from "../images/historia.jpg"

function About() {
  const navigate= useNavigate(); //Hook para navegar programáticamente

  const gotToHome =() =>{
    navigate("/");
  };

  return (
    <section className="section2">
    <h2 className="who">Sobre Rocío López</h2>

    <div className="profile">
      <img className="profile__img" src={historia} alt="Rocío" />
      
         <h3 className="name"></h3>
         <p className="description">
        Tengo 34 años y estudié el Ciclo formativo de Grado Superior de
        Administración y Finanzas. Me considero una persona metódica, organizada y
        responsable por resaltar cualidades positivas pero también soy impaciente,
        autocrítica y algo perfeccionista, lo que me mantiene siempre con muchas
        ganas de seguir mejorando laboral pero sobre todo personalmente. Doy mucho
        valor a disfrutar del tiempo libre en familia y amigos, para tener una
        buena salud física y mental y así poder tener equilibrio entre vida
        personal y laboral.
        </p>
    
      <button onClick={gotToHome}>HOME</button>
    </div>
  
    
    
  </section>
  )
}

export default About