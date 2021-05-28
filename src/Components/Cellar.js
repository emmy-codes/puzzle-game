import React from "react"

function Cellar(props) {
    const onClickHandler = ()=> {
       console.log("stuff")
    }
    return (
      <>
        {/* can't see without lighting lantern with matches */}
        <div className="floor" onClick={onClickHandler}>
          space on the floor to draw trap (with chalk)
        </div>
        <div className="dirt" onClick={onClickHandler}>
          patch of dirt (to dig up candles with shovel)
        </div>
        <div className="salt" onClick={onClickHandler}>
          salt draws a circle on the floor for you to stand in
        </div>
        
      </>
    );
}

export default Cellar