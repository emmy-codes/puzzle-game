import React from "react"
import "../App.css"
import itemList from "../item-list.json"

function ItemsPopupBox(props) {
    
    return props.object ? (
      <>
        <div>
          <div className={`popup-image ${props.object.name}`} />
          <div>{props.object.description}</div>
          <button onClick={props.onPickUp}>Take {props.object.name}</button>
          <button onClick={props.onClose}>Close</button>
        </div>
      </>
    ) : null;
}


export default ItemsPopupBox