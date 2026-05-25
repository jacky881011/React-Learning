import React, {useState, useEffect} from "react";
import { useContext } from "react";
import { UserContext } from "./ComponentsA";
function ComponentsD(){
    const value = useContext(UserContext);      // get user

    return(
        <div className="box">
            <h1>ComponentsD</h1>
            <h2>{`bye ${value}`}</h2>
        </div>
    )
}


export default ComponentsD;