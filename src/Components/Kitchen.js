import React from "react";
import "../App.css";
import ItemsPopupBox from "./items-popup-box";
import Inventory from "./Inventory";
import { Link } from "react-router-dom";
import UsingItems from "./Use-Items";

function Kitchen(props) {
  const availableItems = ["matches", "salt", "dried-herbs", "mortar-pestle"];
  const [currentItem, setCurrentItem] = React.useState();
  const collectorArray = [];

  for (const showItem of availableItems) {
    const foundObject = props.data.items.find((item) => {
      return item.name === showItem;
    });
    collectorArray.push(foundObject);
  }
  const [kitchenItems, setKitchenItems] = React.useState(collectorArray);

  /* clickHandlerCreator is a function that takes targetItem and stores for 
  the click handler (the return) to use */
  const clickHandlerCreator = (targetItem) => {
    /* takes targetItem and .find allows it to check the array data.items
    for the corresponding property value */
    return () => {
      const nextItem = props.data.items.find((item) => {
        return item.name === targetItem;
      });
      setCurrentItem(nextItem);
    };
  };

  const removeItem = () => {
    const newKitchenItems = kitchenItems.reduce((initialArray, kitchenItem) => {
      if (kitchenItem.name !== currentItem.name) {
        initialArray.push(kitchenItem);
      }
      return initialArray;
    }, []);
    setKitchenItems(newKitchenItems);
    setCurrentItem(undefined);
  };

  return (
    <div className="kitchen">
      {currentItem && currentItem["pick-up"] ? (
        <ItemsPopupBox
          object={currentItem}
          onPickUp={() => {
            props.setInventoryItems(props.inventoryItems.concat([currentItem]));
            const newKitchenItems = kitchenItems.reduce(
              (initialArray, kitchenItem) => {
                if (kitchenItem.name !== currentItem.name) {
                  initialArray.push(kitchenItem);
                }
                return initialArray;
              },
              []
            );
            setKitchenItems(newKitchenItems);
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
      {kitchenItems.map((kitchenItem) => {
        return (
          <div
            className={kitchenItem.name}
            onClick={clickHandlerCreator(kitchenItem.name)}
          >
            {kitchenItem.name.replace("-", " ")}
          </div>
        );
      })}
      <Inventory collectedItems={props.inventoryItems} />
      <Link className="cellar-door" to="/cellar">
        {" "}
        Steps to the cellar
      </Link>
      <Link className="kitchen-door" to="/garden">
        To the garden
      </Link>
    </div>
  );
}

export default Kitchen;