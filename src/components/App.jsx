import React, {useState} from "react";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import History from "./History";
import { Routes, Route,} from "react-router-dom";
import anime from "../images/PAGINA-WEB-ANIME.png";
import canino from "../images/PAGINA-WEB-CANINO-NATURAL.png";
import videojuego from "../images/VIDEOJUEGO-CUIDADO-CON-GROGU.png";




function App() {

  
  //useState para ampliar y reducir tamaño de proyectos

  const [hoveredProject, setHoveredProject]= useState (null);


  // actualiza el estado al proyecto hovered
  const handleProjectClick =(id)=>{
    setHoveredProject((prevId) => (prevId === id ? null : id ));
  };
  //Resetea el estado al salir del hover
 
  return (
    
   <>
   
    <Routes>
      <Route path="/"element={<Home 
              handleProjectClick={handleProjectClick}
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



