// updater function = A function passed as an argument to setState() usually 
// ex. setYear(arrow function) => setYear(prevYear => prevYear + 1)
// Allow for safe updates based on the previous state
// Used with multiple state updates and asynchronous functions 
// Good practice to use updater function 

import React, {useState} from 'react';

function Updater(){

    const [count, setCount] = useState(0);  
    function increase(){
        // setCount(count+1);      // if give twice, then just add 1, not 2, because the state update is asynchronous, so the second setCount will use the old count value, which is not updated yet.
        // setCount(count+1);  
        // Takes the pending state to calculate Next state.
        // React puts your updater function in a queue (waiting in line)
        // During the next render, it will call them in the same order
        setCount(count => count+1);    // previous state to change not current state
        setCount(count => count+1);
        setCount(count => count+1);
    }

    function decrease(){
        // setCount(count-1);
        setCount(count => count-1)
        setCount(count => count-1)
    }

    function reset(){
        // setCount(0);
        setCount(0);        // no need to set previous state
    }


    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increase}>Increase</button>
        </div>
    )

}


export default Updater;