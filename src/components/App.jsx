import React, {useState} from "react";
import About from "./About";
import Home from "./Home";
import Training from "./Training.jsx";
import Fyd from "./Fyd.jsx";
import { Routes, Route,} from "react-router-dom";





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
      <Route path="/Fyd"element={<Fyd/>  }/>
      <Route path="/training"element={<Training/> }/>
    </Routes>
    
    </>
  )
}

export default App;



