import React, {useState, useEffect, useEffectEvent} from "react";

function UseEffectFunc2(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(()=>{
        window.addEventListener("resize", handleResize);
        console.log("Event Listen Added");
        return ()=>{
            window.addEventListener("resize", handleResize);
            console.log("Event Listen Removed");
        }
    }, [])
    
    useEffect(()=>{
        document.title = `Size: ${width} x ${height}`;
    }, [width, height])

    


    return(
        <>
            <p>Window width: {width}px</p>
            <p>Window height: {height}px</p>
        </>
    )


}

export default UseEffectFunc2;