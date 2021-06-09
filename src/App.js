import "./App.css";
import React from "react"
import Garden from "./Components/Garden";
import Kitchen from "./Components/Kitchen";
import Cellar from "./Components/Cellar";
import data from "./item-list.json";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [inventoryItems, setInventoryItems] = React.useState([]);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Garden
              inventoryItems={inventoryItems}
              setInventoryItems={setInventoryItems}
              data={data}
            />
          </Route>
          <Route exact path="/garden">
            <Garden
              inventoryItems={inventoryItems}
              setInventoryItems={setInventoryItems}
              data={data}
            />
          </Route>
          <Route exact path="/kitchen">
            <Kitchen
              inventoryItems={inventoryItems}
              setInventoryItems={setInventoryItems}
              data={data}
            />
          </Route>
          <Route exact path="/cellar">
            <Cellar
              inventoryItems={inventoryItems}
              setInventoryItems={setInventoryItems}
              data={data}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
