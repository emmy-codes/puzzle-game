import React from "react";
import data from "../item-list.json";

function setInventory(props) {
  return (
    <>
      <div className="inventory">
        Inventory
        <ul>
            {props.collectedItems.map((inventoryItem) => {
                return (
                  <li>
                    <img width="40" src={`/${inventoryItem.name}.jpg`} />
                    {inventoryItem.name}
                  </li>
                );
            })}
        </ul>
      </div>
    </>
  );
}

export default setInventory;
