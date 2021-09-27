import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const ProjectDetails = () => {
  const { id } = useParams();
  const { data: project, error, isPending } = useFetch(`http://localhost:8000/projects/${id}`);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/projects/' + project.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    })
  }

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {project && (
        <article>
          <h2>{project.name}</h2>
          <p>Created by {project.owner}</p>
          <div>{project.description}</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
}

export default ProjectDetails;