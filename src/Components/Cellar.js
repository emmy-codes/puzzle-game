import React from "react";
import "../App.css";
import data from "../item-list.json";
import ItemsPopupBox from "./items-popup-box";
import Inventory from "./Inventory";
import { Link } from "react-router-dom"

function Cellar() {
  const availableItems = ["chalk", "patch-of-even-ground", "red-candles"];

  /* useState = [stateObject, functionToUpdateStateObject] */
  const [currentItem, setCurrentItem] = React.useState();
  const [inventoryItems, setInventoryItems] = React.useState([]);
  // const [cellarItems, setCellarItems] = React.useState(
  //   availableItems.reduce((array, item) => {
  //     const foundObject = data.items.find((dataItem) => {
  //       return dataItem.name === item
  //     });
  //     array.push(foundObject)
  //     return array
  //   }, [])
  // );

  const collectorArray = [];

  for (const showItem of availableItems) {
    const foundObject = data.items.find((item) => {
      return item.name === showItem;
    });
    collectorArray.push(foundObject);
  }
  const [cellarItems, setCellarItems] = React.useState(collectorArray);

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

  return (
    <div className="cellar">
      <ItemsPopupBox
        object={currentItem}
        onPickUp={() => {
          setInventoryItems(inventoryItems.concat([currentItem]));
          const newCellarItems = cellarItems.reduce(
            (initialArray, cellarItem) => {
              if (cellarItem.name !== currentItem.name) {
                initialArray.push(cellarItem);
              }
              return initialArray;
            },
            []
          );
          setCellarItems(newCellarItems);
          setCurrentItem(undefined);
        }}
        onClose={() => {
          setCurrentItem(undefined);
        }}
      />
      {cellarItems.map((cellarItem) => {
        return (
          <div
            className={cellarItem.name}
            onClick={clickHandlerCreator(cellarItem.name)}
          >
            {cellarItem.name}
          </div>
        );
      })}
      <Inventory collectedItems={inventoryItems} />
      <Link className="cellar-door-to-kitchen" to="/kitchen">Steps to the kitchen</Link>
    </div>
  );
}

export default Cellar;
