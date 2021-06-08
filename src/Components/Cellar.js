import React from "react";
import "../App.css";
import data from "../item-list.json";
import ItemsPopupBox from "./items-popup-box";
import Inventory from "./Inventory";
import { Link } from "react-router-dom";
import UsingItems from "./Use-Items";

function Cellar(props) {
  const availableItems = ["mound-of-dirt", "patch-of-even-ground", "chalk"];
  const [currentItem, setCurrentItem] = React.useState();
  const collectorArray = [];
  const [useThatItem, setUseThatItem] = React.useState();

  for (const showItem of availableItems) {
    const foundObject = data.items.find((item) => {
      return item.name === showItem;
    });
    collectorArray.push(foundObject);
  };
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

  const removeItem = () => {
    const newCellarItems = cellarItems.reduce((initialArray, cellarItem) => {
      if (cellarItem.name !== currentItem.name) {
        initialArray.push(cellarItem);
      }
      return initialArray;
    }, []);
    setCellarItems(newCellarItems);
    setCurrentItem(undefined);
  };

  return (
    <div className="cellar">
      {currentItem && currentItem["pick-up"] ? (
        <ItemsPopupBox
          object={currentItem}
          onPickUp={() => {
            props.setInventoryItems(props.inventoryItems.concat([currentItem]));
            removeItem();
          }}
          onClose={() => {
            setCurrentItem(undefined);
          }}
        />
      ) : (
        <UsingItems
          object={currentItem}
          onUse={() => {
            alert(currentItem.use);
            removeItem();
          }}
          onClose={() => {
            setCurrentItem(undefined);
          }}
        />
      )};

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
      <Inventory collectedItems={props.inventoryItems} />
      <Link className="cellar-door-to-kitchen" to="/kitchen">
        Steps to the kitchen
      </Link>
    </div>
  );
};

export default Cellar;
