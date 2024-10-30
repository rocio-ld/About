import "../scss/Home.scss";
import picture from "../images/foto-rociolopez.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <header className="header">
    <h1 className="header__title">HOLA, SOY ROCÍO LÓPEZ</h1>
    <nav className="header__nav header__list">
        
       
        <Link to="/about" className="link">SOBRE MÍ</Link>
        <Link to="/history" className="link">MI HISTORIA</Link>
        <Link to="/contact" className="link">CONTACTO</Link>
        
    </nav>
    <div className="header__div">
    <img className="header__div--img"src={picture} alt="Imagen Presentación Rocío López"
    title="Imagen de Presentación de Rocío López" />
    <h2 className="header__div--h2">Haciendo del Código una Herramienta para mejorar mi Vida</h2>
    </div>
    </header>
  )
}

export default Home