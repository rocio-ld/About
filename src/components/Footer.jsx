import logo from "../images/logo.png";
import "../scss/Footer.scss";

function Footer() {
  return (
    <div className="divFooter">
        <div className="divFooter__socialmedia">
            <a href="https://www.linkedin.com/in/roc%C3%ADo-l%C3%B3pez-dominguez-perfil/" target="_blank"><i className="fa-brands fa-linkedin divFooter__socialmedia--logo"></i></a>
       
            <a href="https://github.com/rocio-ld" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github divFooter__socialmedia--logo"></i></a>
            <a href="mailto:rocio_ld@hotmail.com">
            <i className="fa-solid fa-envelope divFooter__socialmedia--logo"></i>
            </a>
        </div>
        <div>
      <figure className="figure">
      <img className="figure__img" src={logo} alt="logo Rocío López" />
      </figure>
      
      </div> 
    </div>
  )
}

export default Footer