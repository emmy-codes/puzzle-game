import React from "react";
import "../App.css";

function ItemsPopupBox(props) {
    
    return props.object ? (
      <>
        <div className="centered-popup">
          <div className={`popup-image ${props.object.name}`} />
          <div>{props.object.description}</div>
          <button onClick={props.onPickUp}>Take {props.object.name}</button>
          <button onClick={props.onClose}>Close</button>
        </div>
      </>
    ) : null;
}


export default ItemsPopupBox;