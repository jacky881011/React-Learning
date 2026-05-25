// useContext() = React Hook that allows you to share values
// between multiple levels of components 
// without passing props throug each level

// Provider Component
//1. import {createContext} from 'react'
//2. export const MyContext = createContext();
//3. <MyContext.Provider value = {value}>
//          <Child/>
//  </MyContext.Provider>

// Consumer Components
// 1. import React, {useContext} from 'react';
// import {MyContext} from './ComponentA'
// 2. const value = useContext(MyContext)

import React, {useState, createContext} from "react";
import ComponentsB from "./ComponentsB";
export const UserContext = createContext();

function ComponentsA(){

    const [user, setUser] = useState("BroCode")

    return(
        <>
            <div className="box">
                <h1>ComponentsA</h1>
                <h2>{`Hello ${user}`}</h2>
                <UserContext.Provider value = {user}>
                    <ComponentsB user = {user}/>
                </UserContext.Provider>
                {/* <ComponentsB user = {user}/> put here outside provider will undefined  */}
                
            </div>
            
        </>
    )
}


export default ComponentsA;