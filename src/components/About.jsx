import "../scss/About.scss";

function About() {
  return (
    <section className="section2">
    <h2 className="who">SOBRE MÍ</h2>

    <div className="profile">
      <img className="profile__img" src="./images/foto2.jpeg" alt="Rocío" />
      
         <h3 className="name">Mº Rocío Lopez</h3>
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
      <div className="socialmedia">
        <a href="#https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
        <a href="#https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
        <a href="#https://x.com/" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></a>
        <a href="#https://www.google.com/intl/es/gmail/about/" target="_blank"><i className="fa-solid fa-envelope"></i></a>
      </div> 
    </div>
  
    
    
  </section>
  )
}

export default About