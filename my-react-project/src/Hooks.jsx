// React hook = Special function that allows functional compoenets to use 
// React features without writing a class components 
// (useState, useEffect, useContext, useReader, useCallback, useMemo, useRef, useImperativeHandle, useLayoutEffect, useDebugValue)

// useState() = A React hook tha allows the creation of a stateful variable
// And a setter function to update its value in the Virtual DOM.
// [name, setName]


import React, {useState} from "react";

function Hooks() {
    let [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployee, setIsEmployee] = useState(true);


    const updateName = () => {
        // name = "Lisa Chen";       // this will not work because it will not update the value in the Virtual DOM, and it will not trigger a re-render of the component, so the UI will not be updated.
        setName("Lisa Chen");       // use setFunction
        console.log(`Set Name ${name}`)
    }

    const increaseAge = () => {
        setAge(age + 1);
        console.log(`Increase Age ${age}`) 
    }

    const decreaseAge = () => {
        if(age == 1) {console.warn("Age cannot be negative"); return;}
        setAge(age - 1);
        console.log(`Decrease Age ${age}`) 
    }

    const toggleEmployeeStatus = () => {
        setIsEmployee(!isEmployee);
        console.log(`Toggle Employee Status ${isEmployee}`)
    }
        


    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={()=> updateName()}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={()=> increaseAge()}>Add Age</button>
            <button onClick={()=> decreaseAge()}>Minus Age</button>
            <p>Is Employee: {isEmployee? "Yes":"No"}</p>
            <button onClick={()=> toggleEmployeeStatus()}>Toggle Status</button>
        </div>
    )

}

export default Hooks;