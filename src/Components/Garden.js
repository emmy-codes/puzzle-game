import React from "react";
import "../App.css";
import ItemsPopupBox from "./items-popup-box";
import Inventory from "./Inventory";
import { Link } from "react-router-dom";
import UsingItems from "./Use-Items";

function Garden(props) {
  const availableItems = ["backpack", "key", "lantern", "shovel", "rug"]; // items that can be checked for from the json
  const [currentItem, setCurrentItem] = React.useState(); // name of object, function name
  const collectorArray = []; // empty array, stores data from .push thing

  for (const showItem of availableItems) {
    // for-of loop: named var(showItem), and name of var of array above(availableItems)
    const foundObject = props.data.items.find((item) => {
      /* checking data which is the name we gave to the json list on line 3,
       items is the name of the array in there, and .find is a thing that looks for whats in the paramater which we named "item"*/
      return (
        item.name === showItem
      ); /* called item from above row, looking in the json for items with the same name as 
      the item being clicked (showItem) */
    });
    collectorArray.push(foundObject); // push the object found from the .find and temporarily store it in collectorArray
  };

  const [gardenItems, setGardenItems] = React.useState(collectorArray);
  /* clickHandlerCreator is a function that takes targetItem and stores for 
  the click handler (the return) to use */
  const clickHandlerCreator = (targetItem) => {
    /* takes targetItem and .find allows it to check the array props.data.items
    for the corresponding property value */
    return () => {
      const nextItem = props.data.items.find((item) => {
        return item.name === targetItem;
      });
      setCurrentItem(nextItem);
    };
  };

    const removeItem = () => {
      const newGardenItems = gardenItems.reduce((initialArray, gardenItem) => {
        if (gardenItem.name !== currentItem.name) {
          initialArray.push(gardenItem);
        }
        return initialArray;
      }, []);
      setGardenItems(newGardenItems);
      setCurrentItem(undefined);
    };

  const goToKitchen = () => {
    alert("The door is locked. Perhaps there is a key nearby.");
  };

  const haveKey = props.inventoryItems.find((key) => {
    return key.name === "key";
  });

  return (
    <div className="garden">
      {currentItem && currentItem["pick-up"] ? (
        <ItemsPopupBox
          object={currentItem}
          onPickUp={() => {
            props.setInventoryItems(props.inventoryItems.concat([currentItem]));
            props.setInventoryItems(props.inventoryItems.concat([currentItem]));
            const newGardenItems = gardenItems.reduce(
              (initialArray, gardenItem) => {
                if (gardenItem.name !== currentItem.name) {
                  initialArray.push(gardenItem);
                }
                return initialArray;
              },
              []
            );
            setGardenItems(newGardenItems);
            setCurrentItem(undefined);
          }}
          onClose={() => {
            setCurrentItem(undefined);
          }}
        />
      ) : (
        <UsingItems
          object={currentItem}
          inventoryItems={props.inventoryItems}
          setInventoryItems={props.setInventoryItems}
          onUse={() => {
            alert(currentItem.use);
            removeItem();
          }}
          onClose={() => {
            setCurrentItem(undefined);
          }}
        />
      )}
      ;
      {gardenItems.map((gardenItem) => {
        return (
          <div
            key={`garden-${gardenItem.name}`}
            className={gardenItem.name}
            onClick={clickHandlerCreator(gardenItem.name)}
          >
            {gardenItem.name.replace("-", "")}
          </div>
        );
      })}
      );
      <Inventory collectedItems={props.inventoryItems} />
      {!haveKey ? (
        <div className="door-to-kitchen" onClick={goToKitchen} />
      ) : (
        <Link className="door-to-kitchen" to="/kitchen" />
      )}
      ;
    </div>
  );
};

export default Garden;