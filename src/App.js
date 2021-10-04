import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import CreateProject from './CreateProject.js';
import ProjectDetails from './ProjectDetails';
import NotFound from './NotFound';
import ImageUpload from './components/ImageUpload';
import { Typography } from '@material-ui/core';
import FileUpload from './FileUpload';
import MultiStepForm from './components/AddProposal';
import NeonButton from './components/buttons/NeonButton';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <FileUpload />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/button">
              <NeonButton />
            </Route>
            <Route exact path="/multi-step-form">
              <MultiStepForm />
            </Route>
            <Route path="/image">
              <ImageUpload />
            </Route>
            <Route path="/create">
              <CreateProject />
            </Route>
            <Route path="/projects/:id">
              <ProjectDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        <div className="container">
          <div className="mg20">
            <Typography variant="h5">
              bezkoder.com
            </Typography>
            <Typography variant="h6">
              Material UI File Upload
            </Typography>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;