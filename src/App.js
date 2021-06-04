import "./App.css";
import Garden from "./Components/Garden";
import Kitchen from "./Components/Kitchen";
import Cellar from "./Components/Cellar";
import ItemsPopupBox from "./Components/items-popup-box";
import data from "./item-list.json";
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
            <Route exact path="/cellar">
              <Cellar />
            </Route>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
