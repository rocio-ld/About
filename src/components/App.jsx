import React, {useState} from "react";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import History from "./History";
import { Routes, Route,} from "react-router-dom";
import anime from "../images/PAGINA-WEB-ANIME.png";
import canino from "../images/PAGINA-WEB-CANINO-NATURAL.png";
import videojuego from "../images/VIDEOJUEGO-CUIDADO-CON-GROGU.png";
import ProjectItem from "./ProjectItem";



function App() {

  
  //useState para ampliar y reducir tamaño de proyectos

  const [hoveredProject, setHoveredProject]= useState (null);

  const projects = [
    { id: 1, title: "PAGÍNA WEB ANIME", img: anime },
    { id: 2, title: "PAGÍNA WEB CANINO NATURAL", img: canino },
    { id: 3, title: "VIDEOJUEGO CUIDADO CON GROGU", img: videojuego },
  ];
 
  // actualiza el estado al proyecto hovered
  const handleMouseEnter =(id)=>{
    setHoveredProject(id);
  };
  //Resetea el estado al salir del hover
  const handleMouseLeave=()=>{
    setHoveredProject(null);
  };
  return (
    
   <>
   
    <Routes>
      <Route path="/"element={<Home 
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              hoveredProject={hoveredProject}
            />  }/>
      <Route path="/about"element={<About/>  }/>
      <Route path="/history"element={<History/>  }/>
      <Route path="/contact"element={<Contact/> }/>
    </Routes>
    
    </>
  )
}

export default App;



