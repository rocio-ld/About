import "../scss/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
    <h6 className="footer__copyright">Code Sisters © 2018</h6>
    <ul className="footer__list">
      <li>EQUIPO</li>
      <li>QUIÉNES SOMOS </li>
      <li>CONTACTO</li>
    </ul>
    <figure className="footer__figure">
      <img className="footer__figure--logo" src="./images/logo-adalab.png" alt="Logo Adalab" />
    </figure>
  </footer>
  )
}

export default Footer