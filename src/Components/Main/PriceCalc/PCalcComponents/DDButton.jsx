import React, { useState } from "react";


function DDButton({option}) {
    const [buttonName, setButtonName] = useState('Примерная стоимость')
    function func() {
        if(option.optId)
         setButtonName(`От ${option.optPrice}`)
        
    }
  return (
    <div 
        className="formButton"
        onClick={func}>
        {buttonName}
     
    </div>
  );
}

export default DDButton;
