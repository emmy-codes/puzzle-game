import React from "react";
import "../App.css";
import Inventory from "./Inventory";


function UsingItems(props) {
 
        return props.object ? (
          <>
            <div className="centered-popup">
              <div className={`popup-image ${props.object.name}`} />
              <div>{props.object.description}</div>
              <button onClick={props.onUse}>Use {props.object.name}</button>
              <button onClick={props.onClose}>Close</button>
            </div>
          </>
        ) : null;

};


export default UsingItems;