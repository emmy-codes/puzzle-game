import React from "react";
import "../App.css";
import data from "../item-list.json";
import ItemsPopupBox from "./items-popup-box";

function Garden(props) {
  /* useState = [stateObject, functionToUpdateStateObject] */
  const [currentItem, setCurrentItem] = React.useState()
  /* function that takes targetItem and stores for the click handler
  (the return) to use */
  const clickHandlerCreator = (targetItem) => {
    /* takes targetItem and .find allows it to check the array data.items
    for the corresponding property value */
    return () => {
      const nextItem = data.items.find((item) => {
        return item.name === targetItem;
      });
      setCurrentItem(nextItem)
    }
  };

  return (
    <>
      <ItemsPopupBox object={currentItem} onClose={() =>{
        setCurrentItem(undefined)
      }} />
      <div className="backpack" onClick={clickHandlerCreator("backpack")}>
        Backpack by the flowerbed
      </div>
      {/*cannot pick anything else up before this (needs logic)*/}
      <div className="key" onClick={clickHandlerCreator("key")}>
        Key under the rug at the door
      </div>
      <div className="lantern" onClick={clickHandlerCreator("lantern")}>
        Lantern sitting on the bench
      </div>
      <div className="shovel" onClick={clickHandlerCreator("shovel")}>
        Shovel against the wall
      </div>
      <div className="rug" onClick={clickHandlerCreator("rug")}>
        Storage box with rug inside
      </div>
      <div className="inventory">
        Inventory
        <ul>
          <li>Item image placeholder</li>
          <li>Item image placeholder</li>
          <li>Item image placeholder</li>
          <li>Item image placeholder</li>
        </ul>
      </div>
    </>
  );
}

export default Garden;
