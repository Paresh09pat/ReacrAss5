import React from "react";
import { useState } from "react";


export default function Counter(){

    const [count, setCount]= useState(0)
    
    return(
        <>
        <h3> {count} </h3>
        <button onClick={()=> setCount(count+1)}> Increment</button>
        <button onClick={()=> setCount(count-1)}> Decrement</button>

        </>
    )
}

export function Counter1(){
    const [count1,setCount1] = useState(1)

    return(
        <>
        <h3>{count1}</h3>
       <button onClick={()=> setCount1(count1*2)}> Multiply</button>
       <button onClick={()=> setCount1(count1/2)}> Divide</button>
       </>
    )
}