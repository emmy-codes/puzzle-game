import "./App.css";
import Garden from "./Components/Garden";
import Kitchen from "./Components/Kitchen";
import Cellar from "./Components/Cellar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/garden">
            <Garden />
          </Route>
          <Route exact path="/kitchen">
            <Kitchen />
          </Route>
          <Route exact path="/cellar">
            <Cellar />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
