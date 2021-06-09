import React from "react";
import "../App.css";
import data from "../item-list.json";
import { useHistory } from "react-router-dom";

function UsingItems(props) {
  const history = useHistory();
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
    console.log(props.inventoryItems);
    console.log(props.object["requires"]);
    const requiredItem = props.inventoryItems.filter((item) => {
      return props.object["requires"].includes(item.name);
    });

    if (requiredItem.length !== props.object["requires"].length) {
      alert("A quick look into your backpack tells you that you're lacking an important item in order to progress.");
      props.onClose();
    } else {
      const useWithEffect = () => {
        const newInventoryItems = props.inventoryItems.reduce(
          (initialArray, inventoryStuff) => {
            if (inventoryStuff.name !== props.object.name) {
              initialArray.push(inventoryStuff);
            }
            return initialArray;
          },
          []
        );
        const usedItem = data.items.find((item) => {
          return item.name === props.object["use-result"];
        });

        if (usedItem) {
          newInventoryItems.push(usedItem);
        } else if (
          props.object["use-result"] &&
          props.object["use-result"] === "Navigate to epilogue"
        ) { 
          history.push('/epilogue')
        }

        props.setInventoryItems(newInventoryItems);
        props.onUse();
      };

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