import React, {useRef, useState, useEffect} from 'react';

// useState() = Re-renders the component when the state value changes

// useRef() = "use Reference" does not cause re-renders when its value changes, 
// when you want a component to "remember" some information,
// but you don't want that information to trigger new renders.

// 1. Accessing/ Interacting with DOM elements
// 2. Handling Focus, Animations and Transitions 
// 3. Managing Timers and Intervals

const UseRefFunc = () => {
    // let [number, setNumber] = useState(0);

    const inputref1 = useRef(null);
    const inputref2 = useRef(null);
    const inputref3 = useRef(null);

    useEffect(()=> {
        console.log("COMPONENT RENDERED");
    });

    function handleClick1(){
        inputref1.current.focus();
        inputref1.current.style.backgroundColor = "yellow";
        inputref2.current.style.backgroundColor = "";
        inputref3.current.style.backgroundColor = "";
    }

    function handleClick2(){
        inputref2.current.focus();
        inputref1.current.style.backgroundColor = "";
        inputref2.current.style.backgroundColor = "yellow";
        inputref3.current.style.backgroundColor = "";
    }

    function handleClick3(){
        inputref3.current.focus();
        inputref1.current.style.backgroundColor = "";
        inputref2.current.style.backgroundColor = "";
        inputref3.current.style.backgroundColor = "yellow";
    }


    return (
        <div>
            <button onClick={()=>handleClick1()}>Click me1!</button>
            <input ref = {inputref1}/><br/>

            <button onClick={()=>handleClick2()}>Click me2!</button>
            <input ref = {inputref2}/><br/>

            <button onClick={()=>handleClick3()}>Click me3!</button>
            <input ref = {inputref3}/>
        </div>
    );
};

export default UseRefFunc;