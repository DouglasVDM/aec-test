import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import CreateProject from './CreateProject.js';
import ProjectDetails from './ProjectDetails';
import NotFound from './NotFound';
import Aapp from './Aapp';
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
            <Route exact path="/aapp">
              <Aapp />
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