import React from "react"
import "../App.css"
import itemList from "../item-list.json"

function ItemsPopupBox(props) {
    
    return props.object ? (
      <>
        <div>
          <img width="200" src={`/${props.object.name}.jpg`} />
          <div>{props.object.description}</div>
          <button>Take {props.object.name}</button>
          <button onClick={props.onClose}>Close</button>
        </div>
      </>
    ) : null;
}


export default ItemsPopupBox