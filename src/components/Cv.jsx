import curriculum from "../images/CV.png";
import "../scss/Cv.scss";

function Cv() {
  return (
    <div className="divCV">
        <h3 className="divCV__h3">CV</h3>
        <img className="divCV__img" src={curriculum} alt="Curriulum Vitae Rocío López"
        title="Curriculum Vitae Rocío López" />
    </div>
  )
}

export default Cv;