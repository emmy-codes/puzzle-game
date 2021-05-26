import React from "react"
import "../App.css";

function Garden(props) {
   const onClickHandler = ()=> {
       console.log("stuff")
   }

    return (
      <>
        <div className="backpack" onClick={onClickHandler}>
          Backpack by the flowerbed
        </div>
        {/*cannot pick anything else up before this (needs logic)*/}
        <div className="key" onClick={onClickHandler}>Key under the rug at the door</div>
        <div className="lantern" onClick={onClickHandler}>Lantern sitting on the bench</div>
        <div className="shovel" onClick={onClickHandler}>Shovel against the wall</div>
        <div className="rug" onClick={onClickHandler}>Storage box with rug inside</div>
      </>
    );
}

export default Garden