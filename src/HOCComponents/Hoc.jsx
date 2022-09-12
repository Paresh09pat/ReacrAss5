import React from "react";

export default function HOCRed(props){
return(
  <>
  <h1 style={{backgroundColor:'red', width:'auto',textAlign:'center'}}> Red Counter <props.cmp /> </h1>
  </>
)
}

export function HOCGreen(props){
return(
  <>
  <h1 style={{backgroundColor:'green', width:'auto',textAlign:'center'}}> Green Counter <props.cmp /> </h1>
  </>
)
}

export function HOCAqua(props){
return(
  <>
  <h1 style={{backgroundColor:'aqua', width:'auto',textAlign:'center'}}> Multiply and Divide by 2  <props.cmp1 /> </h1>
  </>
)
}

