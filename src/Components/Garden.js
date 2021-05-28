import React from "react";
import "../App.css";
import data from "../item-list.json";
import ItemsPopupBox from "./items-popup-box";
import Inventory from "./Inventory";

function Garden(props) {
  const gardenItemsName = ["backpack", "key", "lantern", "shovel", "rug"];

  /* useState = [stateObject, functionToUpdateStateObject] */
  const [currentItem, setCurrentItem] = React.useState();
  const [inventoryItems, setInventoryItems] = React.useState([]);
  const [gardenItems, setGardenItems] = React.useState(
    data.items.reduce((array, item) => {
      if (gardenItemsName.includes(item.name)) {
        array.push(item);
      }
      return array;
    }, [])
  );
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
    <div className="garden">
      <ItemsPopupBox
        object={currentItem}
        onPickUp={() => {
          setInventoryItems(inventoryItems.concat([currentItem]));
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
            className={gardenItem.name}
            onClick={clickHandlerCreator(gardenItem.name)}
          >
            {gardenItem.name}
          </div>
        );
      })}
      <Inventory collectedItems={inventoryItems} />
    </div>
  );
}

export default Garden;
