import "../scss/ProjectItem.scss";

function ProjectItem({
  handleProjectClick,
  hoveredProject,
  projects,
}) {
  return (
    <section className="sectionProject">
      <h2 className="sectionProject__h2">PROYECTOS DESTACADOS</h2>
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
    </section>
  );
}

export default ProjectItem;
