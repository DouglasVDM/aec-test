import React from "react";
import ProjectList from "./ProjectList";
import useFetch from "./useFetch";
import MultiStepForm from './components/AddProposal';

const Home = () => {
  const { error, isPending, data: projects } = useFetch('http://localhost:8000/projects')

  return (
    <div className="home">
      <MultiStepForm />
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {projects && <ProjectList projects={projects} />}
    </div>
  );
}

export default Home;