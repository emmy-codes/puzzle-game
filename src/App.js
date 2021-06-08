import "./App.css";
import React from "react"
import Garden from "./Components/Garden";
import Kitchen from "./Components/Kitchen";
import Cellar from "./Components/Cellar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [inventoryItems, setInventoryItems] = React.useState([]);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/garden">
            <Garden
              inventoryItems={inventoryItems}
              setInventoryItems={setInventoryItems}
            />
          </Route>
          <Route exact path="/kitchen">
            <Kitchen
              inventoryItems={inventoryItems}
              setInventoryItems={setInventoryItems}
            />
          </Route>
          <Route exact path="/cellar">
            <Cellar
              inventoryItems={inventoryItems}
              setInventoryItems={setInventoryItems}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
