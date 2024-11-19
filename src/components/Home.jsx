import "../scss/Home.scss";
import anime from "../images/PAGINA-WEB-ANIME.png";
import canino from "../images/PAGINA-WEB-CANINO-NATURAL.png";
import videojuego from "../images/VIDEOJUEGO-CUIDADO-CON-GROGU.png";
import ProjectItem from "./ProjectItem";
import { Link } from "react-router-dom";
import picture from "../images/foto-rocioLopez.jpg";
import Cv from "./Cv";
import Footer from "./Footer";
import github from "../images/github.png";
import js from "../images/js.png";
import css3 from "../images/CSS3.png";
import html5 from "../images/HTML5.png";
import react from "../images/React.svg";

function Home({handleProjectClick, hoveredProject}) {

  const projects = [
    { id: 1, 
      title: "PAGÍNA WEB ANIME", 
      img: anime , 
      desc: "Página web alimentada de API, dónde podemos hacer búsquedas de películas Anime, seleccionar tu película favorita o eliminarla de la lista.", tecn: 
      [github,js,css3, html5]
    },
    { id: 2, 
      title: "PAGÍNA WEB CANINO NATURAL", 
      img: canino , 
      desc: "Página web con diseño responsive alimentada de API externa, de  alimentación de perros, dónde puedes rellenar en un formulario con datos y dichos datos se renderizará en una tarjeta.", 
      tecn: [github,js,css3, html5] 
    },
    { id: 3, 
      title: "VIDEOJUEGO CUIDADO CON GROGU", img: videojuego , 
      desc: "Videojuego que consiste en tirar el dado de forma aleatoria, y Grogu según el número aleatorio avanzará casillas o tu como jugador irás vaciando mercancía. ", tecn: [github,js,css3, html5, react] 
    },
  ];

  return (
  <>
    <header className="header">
    <h1 className="header__title">HOLA, SOY ROCÍO LÓPEZ</h1>
    <nav className="header__nav header__list">
    <Link to="/about" className="link">
    SOBRE MÍ
      </Link>
      <Link to="/Fyd" className="link">
        SKILLS
      </Link>
      <Link to="/training" className="link">
        FORMACIÓN
      </Link>
    </nav>
    <div className="header__div">
      <img
        className="header__div--img"
        src={picture}
        alt="Imagen Presentación Rocío López"
        title="Imagen de Presentación de Rocío López"
      />
      <h2 className="header__div--h2">
        Haciendo del Código una Herramienta para mejorar mi Vida
      </h2>
    </div>
  </header>
    <ProjectItem
    handleProjectClick={handleProjectClick}
    hoveredProject={hoveredProject}
    projects={projects}
  />
  <main>
    <Cv/>
  </main>
  <Footer/>
  </>
  );
}

export default Home;
