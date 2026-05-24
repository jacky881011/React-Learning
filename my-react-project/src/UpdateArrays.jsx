import React, { useState } from "react";

function UpdateArrays() {
    const [foods, setFoods] = useState(["Pizza", "Burger", "Sushi"]);

    function handleAddFoot(){
        const newFood = document.getElementById("foodInput").value;  // get the value of the input field
        setFoods(f => [...f, newFood]);  // use previous state to update the foods array, and use spread operator to create a new array with the existing foods and the new food added at the end. This way, we can update the state without mutating the original array.
    }

    function handleRemoveFood(index){
       setFoods(foods.filter((_, i)=> i!== index))
    }
    
    
    return(
        <div>
            <h1>List of foods</h1>
            <p>Click item can remove it</p>
            <ul>
                {foods.map((food, index)=> <li key= {index} onClick={()=>handleRemoveFood(index)}>{food}</li>)}
            </ul>
            <input type= "text" id = "foodInput" placeholder="Enter food name"></input>
            <button onClick={handleAddFoot}>Add Food</button>
        </div>
    )
}

export default UpdateArrays;