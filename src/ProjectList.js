import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  return (
    <div className="blog-list">
      {projects.map(project => (
        <div className="blog-preview" key={project.id} >         
          <Link to={`/projects/${project.id}`}>
          <h2>{project.name}</h2>
          <p>Created by {project.owner}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;