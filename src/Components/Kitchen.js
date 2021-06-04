import React from "react"
import "../App.css";
import data from "../item-list.json";
import ItemsPopupBox from "./items-popup-box";
import Inventory from "./Inventory";
import { Link } from "react-router-dom";

function Kitchen() {
   const availableItems = [
     "matches",
     "salt",
     "dried-herbs",
     "mortar-pestle"
   ];

   /* useState = [stateObject, functionToUpdateStateObject] */
   const [currentItem, setCurrentItem] = React.useState();
   const [inventoryItems, setInventoryItems] = React.useState([]);
   // const [kitchenItems, setKitchenItems] = React.useState(
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
   const [kitchenItems, setKitchenItems] = React.useState(collectorArray);

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
     <div className="kitchen">
       <ItemsPopupBox
         object={currentItem}
         onPickUp={() => {
           setInventoryItems(inventoryItems.concat([currentItem]));
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
       {kitchenItems.map((kitchenItem) => {
         return (
           <div
             className={kitchenItem.name}
             onClick={clickHandlerCreator(kitchenItem.name)}
           >
             {kitchenItem.name}
           </div>
         );
       })}
       <Inventory collectedItems={inventoryItems} />
       <Link className="cellar-door" to="/cellar"> Steps to the cellar</Link>
       <Link className="kitchen-door" to="/garden">To the garden</Link>
     </div>
   );
 }

export default Kitchen