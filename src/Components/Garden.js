import React from "react"

function Garden(props) {
   const onClickHandler = ()=> {
       console.log("stuff")
   }

    return(
        <>
            <div onClick={onClickHandler}>Backpack by the flowerbed</div> {/*cannot pick anything else up before this (needs logic)*/}
            <div>Key under the rug at the door</div>
            <div>Lantern sitting on the bench</div>
            <div>Shovel against the wall</div>
            <div>Storage box with rug inside</div>
        </>
    )
}

export default Garden