import "../scss/ProjectItem.scss";
import React, {useState} from 'react';



function ProjectItem({
  handleProjectClick,
  hoveredProject,
  projects,
}) {

const [isExpanded, setIsExpanded] = useState(true);

function expanded (){
  setIsExpanded(prev => !prev);
};


  return (
    <section className="sectionProject">
      <h2 className={`sectionProject__h2 ${!isExpanded ? "collapsed" : ""}` }onClick={expanded}>PROYECTOS DESTACADOS </h2>
      {isExpanded && ( 
      <div className="sectionProject__div">
        {projects.slice(0, 3).map((project) => (
          <div
            key={project.id}
            className={`sectionProject__item ${
              hoveredProject === project.id ? "hovered" : ""
            }`}
            onClick={() => handleProjectClick(project.id)}
           
          >
            <h3 className="sectionProject__div--title">{project.title}</h3>
            <img
              src={project.img}
              alt={project.title}
              className="sectionProject__div--img"
            />
          </div>
        ))}
      </div>
      )}
    </section>
  );
}

export default ProjectItem;
