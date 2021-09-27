import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import CreateProject from './CreateProject.js';
import ProjectDetails from './ProjectDetails';
import NotFound from './NotFound';
import ImageUpload from './components/ImageUpload';
import UploadFiles from "./components/upload-files.component";
import { Typography } from '@material-ui/core';



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

          <UploadFiles />
        </div>
      </div>
    </Router>
  );
}

export default App;