import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import History from "./History";
import { Routes, Route} from "react-router-dom";


function App() {
  
  return (
    
   <>
    <Routes>
      <Route path="/"element={<Home/>  }/>
      <Route path="/about"element={<About/>  }/>
      <Route path="/history"element={<History/>  }/>
      <Route path="/contact"element={<Contact/> }/>
    </Routes>
    </>
  )
}

export default App;



