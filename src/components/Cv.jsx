import { useState } from "react";
import curriculum from "../images/CV.png";
import "../scss/Cv.scss";

function Cv() {
  const [expanded, setExpanded]= useState (true);

  function toExpanded(){
    setExpanded (prev => !prev);
  }
  return (
    <div className="divCV">
        <h3 className={`divCV__h3 ${!expanded ? "collapsed": ""}`} onClick={toExpanded}>CV</h3>
        {expanded && (
        <img className="divCV__img" src={curriculum} alt="Curriulum Vitae Rocío López"
        title="Curriculum Vitae Rocío López" />
      )}
    </div>
  );
};

export default Cv;