import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import CreateProject from './CreateProject.js';
import ProjectDetails from './ProjectDetails';
import NotFound from './NotFound';
import ImageUpload from './components/ImageUpload';
import FileUpload from './FileUpload';
import MultiStepForm from './components/AddProposal';
import ProposalTempl from './components/ProposalTempl';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/multi-step-form">
              <MultiStepForm />
            </Route>
            <Route exact path="/export-pdf">
              <ProposalTempl />
            </Route>
            <Route exact path="/file-upload">
              <FileUpload />
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
      </div>
    </Router>
  );
}

export default App;