import React from "react";
import { useHistory } from "react-router";

function FullscreenPrompt(props) {
    const history = useHistory();

    const moveToRoute = () => {
      if (!props.linksTo) return;
    
      if (typeof props.linksTo === 'string') { 
        history.push(props.linksTo);
      } else {
          props.linksTo();
      }
    };
  return (
    <>
      <div className="inventory epilogue">
        {props.text}
        <button onClick={moveToRoute}>{props.buttonText}</button>
      </div>
    </>
  );
}

export default FullscreenPrompt;
