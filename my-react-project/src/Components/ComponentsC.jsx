import React, {useState, useEffect} from "react";
import ComponentsD from "./ComponentsD";
import { useContext } from "react";
import { UserContext } from "./ComponentsA";
function ComponentsC(){
    const user = useContext(UserContext);
    return(
        <div className="box">
            <h1>ComponentsC</h1>
            <h2>{`Hello again and again ${user}`}</h2>
            <ComponentsD/>
        </div>
    )
}


export default ComponentsC;