import React from "react";

function setInventory(props) {
  return (
    <>
      <div className="inventory">
        Inventory
        <ul>
            {props.collectedItems.map((inventoryItem) => {
                return (
                  <li key={inventoryItem.name}>
                    <div className={`inventory-image ${inventoryItem.name}`} />
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