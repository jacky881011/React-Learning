import React, {useState} from "react";

function ColorPicker() {    
    const [color, selectColor] = useState("#FFFFFF");   

    const handleChangeBackgroundColor = (event) => {
        selectColor(event.target.value);
    }

    return(
        <div className = 'color-picker-container'>
            <h1>Color Picker</h1>
            <div className="color-display" style = {{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a Color: </label>
            <input type = "color" value = {color} onChange={handleChangeBackgroundColor}/>

        </div>
    );


}

export default ColorPicker;