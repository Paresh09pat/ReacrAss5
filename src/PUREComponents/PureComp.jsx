import React, { PureComponent } from "react";

class PureCom extends PureComponent{
   constructor(){
    super();
    this.state={
      data:10
    }

   }
   
   
    render(){
        console.warn(this.state);
        return(
            <>
            <h1> Pure Component : {this.state.data}</h1>
            <button onClick={()=>{this.setState({data:10})}}> Update Button </button>
            </>
        )
    }
}

export default PureCom;