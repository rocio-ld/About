import "../scss/Header.scss";
import picture from "../images/foto-rociolopez.jpg";

function Header() {
  return (
    
  <header className="header">
    <h1 className="header__title">HOLA, SOY ROCÍO LÓPEZ</h1>
    <nav className="header__nav">
      <ul className="header__list">
        <li>SOBRE MÍ</li>
        <li>MI HISTORIA</li>
        <li>CONTACTO</li>
      </ul>
     </nav>
  <div className="header__div">
    <img className="header__div--img"src={picture} alt="Imagen Presentación Rocío López"
    title="Imagen de Presentación de Rocío López" />
    <h2 className="header__div--h2">Haciendo del Código una Herramienta para mejorar mi Vida</h2>
  </div>
  </header>
  )
}

export default Header





