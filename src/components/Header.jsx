import "../scss/Header.scss";
import picture from "../images/foto-rociolopez.jpg";

function Header() {
  return (
    
  <header className="header">
    <h1 className="header__titulo">HOLA, SOY ROCÍO LÓPEZ</h1>
    <nav>
      <ul className="header__list">
        <li>SOBRE MÍ</li>
        <li>MI HISTORIA</li>
        <li>CONTACTO</li>
      </ul>
     </nav>
  <img 
    src={picture} 
    alt="Imagen de Presentación de Rocío López"
    title="Imagen de Presentación de Rocío López"
    className="header__img"/>
  
  </header>
  )
}

export default Header





