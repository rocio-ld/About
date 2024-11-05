import "../scss/About.scss";
import {useNavigate}from "react-router-dom";
import about from "../images/about.jpg"

function About() {
  const navigate= useNavigate(); //Hook para navegar programáticamente

  const gotToHome =() =>{
    navigate("/");
  };

  return (
    <section className="section2">
    <h2 className="who">Sobre Rocío López</h2>

    <div className="profile">
      <img className="profile__img" src={about} alt="Rocío" />
      
         <h3 className="name">Te cuento sobre mí</h3>
         <p className="description">
        Actualmente soy Desarrolladora Web Junior, y me preguntaréis ¿Cómo ha llegado una administrativa a interesarse por este mundo del Desarrollo de páginas web?... pues te cuento un poco...</p>

        <p className="description">Cuando finalicé el bachillerato con 18 años tenía que tomar la decisión más importante de mi vida, pero sabía que me gustaba y que no me gustaba, y en base a eso sabía que tenía que estudiar algo que tuviera  Matemáticas. </p>

        <p className="description">Bajo mi punto de vista, en su día (hace 16 años), había poca información de las diferentes salidas laborales a elegir, así que pensé *estudia FPII de Administración y Finanzas* y pronto si Dios quiere empezarás a trabajar.</p>

        <p className="description">Terminé el FPII en 2010, y adivinad!! Me cogió una maravillosa crisis que duró unos cuantos años. Trabajar había que trabajar... aunque fui consiguiendo experiencia como administrativa de puro milagro.</p>

        <p className="description">En 2018, y después de mis experiencias como Administrativa, estaba algo frustrada, ya que no conseguía una estabilidad laboral que tanto ansiaba, y decidí meterme en el ejército, ya que me aportaría estabilidad y un cambio de aires.</p>

        <p className="description">Y siiiiii que cambié de aires, conocí al amor de mi vida, me casé y tuve un hermoso bebe. </p>

        <p className="description">Además al tener experiencia previa administrativa, me ubicaron en la oficina de la compañía, con lo que todo iba como la seda HASTA... que mi marido consiguió trabajo en Sevilla y nos transladamos a mi tierra.</p >

        <p className="description">Necesitaba hacer un cambio de vida, ya que el cambiar de destino es muy difícil de conseguir en el ejército. Así que apareció Pepito Grillo con un gran consejo, estudia Desarrollo Web que tiene muchas salidas, puede que te guste...</p>

        <p className="description">Y ME ENCANTA!!!!  </p>

        <p className="description">Hay que seguir formándose siempre, es un mundo muy amplio y esto es SÓLO EL PRINCIPIO...</p>

        


        
        
        
    
      <button onClick={gotToHome} className="button">HOME</button>
    </div>
  
    
    
  </section>
  )
}

export default About