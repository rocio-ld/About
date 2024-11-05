import "../scss/Home.scss";
import anime from "../images/PAGINA-WEB-ANIME.png";
import canino from "../images/PAGINA-WEB-CANINO-NATURAL.png";
import videojuego from "../images/VIDEOJUEGO-CUIDADO-CON-GROGU.png";
import ProjectItem from "./ProjectItem";
import { Link } from "react-router-dom";
import picture from "../images/foto-rocioLopez.jpg";
import Cv from "./Cv";


function Home({handleProjectClick, hoveredProject}) {

  const projects = [
    { id: 1, title: "PAGÍNA WEB ANIME", img: anime  },
    { id: 2, title: "PAGÍNA WEB CANINO NATURAL", img: canino  },
    { id: 3, title: "VIDEOJUEGO CUIDADO CON GROGU", img: videojuego  },
  ];

  return (
  <>
    <header className="header">
    <h1 className="header__title">HOLA, SOY ROCÍO LÓPEZ</h1>
    <nav className="header__nav header__list">
    <Link to="/about" className="link">
    SOBRE MÍ
      </Link>
      <Link to="/history" className="link">
        MI HISTORIA
      </Link>
      <Link to="/contact" className="link">
        CONTACTO
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
  </>
  );
}

export default Home;
