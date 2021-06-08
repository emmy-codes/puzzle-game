import React from "react";
import "../App.css";
import data from "../item-list.json";


function UsingItems(props) {
  if (props.object && !props.object["requires"]) {
    return (
      <>
        <div className="centered-popup">
          <div className={`popup-image ${props.object.name}`} />
          <div>{props.object.description}</div>
          <button onClick={props.onUse}>Use {props.object.name}</button>
          <button onClick={props.onClose}>Close</button>
        </div>
      </>
    );
  } else if (props.object) {
    const requiredItem = props.inventoryItems.find((item) => {
      return item.name === props.object["requires"];
    });

    if(!requiredItem) {
      alert("You are missing something");
      props.onClose()
    } else {

      const useWithEffect = () => {
        const newInventoryItems = props.inventoryItems.reduce(
          (initialArray, inventoryStuff) => {
            if (inventoryStuff.name !== props.object["requires"]) {
              initialArray.push(inventoryStuff);
            }
            return initialArray;
          },
          []
        );
        const usedItem = data.items.find((item) => {
          return item.name === props.object["use-result"];
        });


        newInventoryItems.push(usedItem);

        props.setInventoryItems(newInventoryItems);
        props.onUse();
      }

      return (
        <>
          <div className="centered-popup">
            <div className={`popup-image ${props.object.name}`} />
            <div>{props.object.description}</div>
            <button onClick={useWithEffect}>Use {props.object.name}</button>
            <button onClick={props.onClose}>Close</button>
          </div>
        </>
      );
    }
  }

  return null;
};


export default UsingItems;