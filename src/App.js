import "./App.css";
import React from "react";
import Garden from "./Components/Garden";
import Kitchen from "./Components/Kitchen";
import Cellar from "./Components/Cellar";
import data from "./item-list.json";
import Epilogue from "./Components/Epilogue";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [inventoryItems, setInventoryItems] = React.useState([]);

  return (
    <>
      <Router basename="/puzzle-game">
        <Switch>
          <Route exact path="/">
            <Epilogue
              text={`
                 The gentle patter of the rain tapping your face slowly rouses you from unconsciousness as the grass beneath you begins to permeate your clothes with a cold wetness.
 Wait, rain, grass? You sit up, suddenly confused as to why you are sitting in a garden in the rain. The last thing you remember is falling asleep in that creepy abandoned mansion with the suspiciously well kept beds.and the laughing... that deep throated, malicious chuckle as you drifted off...
….Shit. This must be a sleep demon's dream prison! (You have watched enough supernatural shows to know where this is going). The only way out is through, you’ll have to capture this damned demon before it eats your soul and you are stuck here forever! I bet there are some useful things around here that you can fashion into a trap...
              `}
              linksTo="/garden"
              buttonText="Start game"
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
          <Route exact path="/epilogue">
            <Epilogue
              text={`
                You glance into your backpack at the assorted items. This looks like it may be good enough to capture this demon and wake you from this eternal sleep, but who knows at this point. Either way, it's time for action. You place the candles one each side of the bottom of the stairs, strike your matches, and light them. An eerie green flame bursts from the wick, then settles, leaving an unnatural glow behind. You take the chalk and draw an intricate pattern on the floor, which you just hope is enough. You then sprinkle the ground herbs over the trap, which causes the whole thing to hiss and steam. Quickly you cover the trap with the rug, then step into a corner and draw a circle of salt around where you stand. This should keep you safe from the demon. Suddenly you hear the cellar door creek open, and the stench of sulfur fills the air. A deep, filthy laugh echos down the stairs. 'Did you think you could hide from me?' it rumbles, as it takes a step down. The sounds of its cloven foot echo on the stone steps. 'I know you are down here. Come out and play, I have a game in mind for someone like you.' Two more steps it takes, before noticing the green glow of the candles. 'What are these? Do you expect this to stop me from entering? HAHAHAH puny mortal, perhaps I misjudged your intelligence.' A few more heavy thuds on the steps, then a muffled thud as it steps onto the rug. You hear the demon sniffing the air '...What's that? That scent... seems familiar...' Suddenly a bright yellow light leaks out from underneath the rug, curling around like smoke and accompanied by a loud humming sound. It is not bad enough to make you cover your ears, yet the demon appears to be in agony. He clasps his clawed hands to his gnarled ears, writhing where he stands. 'WHAT IS THIS' he howls, stumbling forward. A pillar of white light bursts from the ground infront of the demon and shoots through the ceiling. More beams burst around him as he twists and turns, looking for an escape. Finally only his shadowy outline is distinguishable behind the pillar of light. 'FOOLISH LITTLE CREATURE!' comes the gutteral cry from behind the light. Is that singing you hear? 'DO YOU KNOW WHO I AM? YOU WILL REGRET THIS-AGHHHHH!' the growling and howling finally die down, and with it, the light. The candles extinguish and leave behind a disgusting smelling cloud of green smoke. Suddenly you sit up in bed, gasping for breath, sweating and shaking, but awake. You made it out of the dream world!
              `}
              linksTo={() => window.parent.postMessage("nextLevel")}
              buttonText="The End!"
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
