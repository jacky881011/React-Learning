import React, {useState} from "react";

function UserStateValue(){

    const [car, setCar] = useState({year: 2024, make: "Ford", model: "Mustang"});


    function handleYearChange(e){
        setCar(car => ({...car, year: e.target.value}));   // use spread operator to copy the existing properties of the car object, and then update the year property with the new value from the input field. This way, we can update only the year without affecting the make and model properties.
    }

    function handleMakeChange(e){
        setCar(car => ({...car, make: e.target.value}));
    }

    function handleModelChange(e){
        setCar(car => ({...car, model: e.target.value}));
    }

    return (
        <div>
            <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
            <input type = "number" value= {car.year} onChange={handleYearChange}/> <br/>
            <input type = "text" value= {car.make} onChange={handleMakeChange}/> <br/>
            <input type = "text" value= {car.model} onChange={handleModelChange}/> <br/>
        </div>
    )
}

export default UserStateValue