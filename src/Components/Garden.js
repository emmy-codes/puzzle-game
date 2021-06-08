import React from "react";
import "../App.css";
import data from "../item-list.json";
import ItemsPopupBox from "./items-popup-box";
import Inventory from "./Inventory";
import { Link } from "react-router-dom";

function Garden(props) {
  const availableItems = ["backpack", "key", "lantern", "shovel", "rug"];

  /* useState = [stateObject, functionToUpdateStateObject] */
  // const [gardenItems, setGardenItems] = React.useState(
  //   availableItems.reduce((array, item) => {
  //     const foundObject = data.items.find((dataItem) => {
  //       return dataItem.name === item
  //     });
  //     array.push(foundObject)
  //     return array
  //   }, [])
  // );

  const [currentItem, setCurrentItem] = React.useState();
  const collectorArray = [];

  for (const showItem of availableItems) {
    const foundObject = data.items.find((item) => {
      return item.name === showItem;
    });
    collectorArray.push(foundObject);
  }
  const [gardenItems, setGardenItems] = React.useState(collectorArray);

  /* clickHandlerCreator is a function that takes targetItem and stores for 
  the click handler (the return) to use */
  const clickHandlerCreator = (targetItem) => {
    /* takes targetItem and .find allows it to check the array data.items
    for the corresponding property value */
    return () => {
      const nextItem = data.items.find((item) => {
        return item.name === targetItem;
      });
      setCurrentItem(nextItem);
    };
  };

  const goToKitchen = () => {
    alert("The door is locked. Perhaps there is a key nearby.");
  };
  
  const haveKey = props.inventoryItems.find((key) => {
    return key.name === "key";
  });

  return (
    <div className="garden">
      <ItemsPopupBox
        object={currentItem}
        onPickUp={() => {
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
      {gardenItems.map((gardenItem) => {
        return (
          <div
            key={`garden-${gardenItem.name}`}
            className={gardenItem.name}
            onClick={clickHandlerCreator(gardenItem.name)}
          >
            {gardenItem.name}
          </div>
        );
      })}
      <Inventory collectedItems={props.inventoryItems} />
      {!haveKey ? (
        <div className="door-to-kitchen" onClick={goToKitchen} />
      ) : (
        <Link className="door-to-kitchen" to="/kitchen" />
      )}
    </div>
  );
}

export default Garden;
