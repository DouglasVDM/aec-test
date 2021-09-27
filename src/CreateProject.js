import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateProject = () => {
  const [name, setName] = useState("");
  const [target, setTarget] = useState("");
  const [description, setDescription] = useState("");
  const [owner, setOwner] = useState([]);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const newProject = { project_name, project_target_group, project_description,project_owner };
    const newProject = { name, target, description, owner };

    fetch('http://localhost:8000/projects/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      description: JSON.stringify(newProject)
    }).then(() => {
      // history.go(-1);
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Project</h2>
      <form onSubmit={handleSubmit}>
        <label>Project name:</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Project target group:</label>
        <textarea
          required
          onChange={(e) => setTarget(e.target.value)}
          value={target}
        ></textarea>
        <label>Project description:</label>
        <textarea
          required
          onChange={(e) => setDescription(e.target.target)}
          value={description}
        ></textarea>
        <label>Project owner:</label>
        <textarea
          required
          onChange={(e) => setOwner(e.target.target)}
          value={owner}
        ></textarea>
        <button>Create Project</button>
      </form>
    </div>
  );
}

export default CreateProject;
