import Canvas from "./components/Canvas";
import SettingsBar from "./components/SettingsBar";
import ToolBar from "./components/ToolBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/:id">
            <ToolBar />
            <SettingsBar />
            <Canvas />
          </Route>
          <Redirect to={`f${(+new Date()).toString(16)}`} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
