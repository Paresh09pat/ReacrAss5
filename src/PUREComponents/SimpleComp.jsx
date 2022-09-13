import React from "react";


class SimCom extends React.Component{
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
            <div className="cendiv">
            <h1> Simple Component : {this.state.data}</h1>
            <button onClick={()=>{this.setState({data:10})}}> Update Button</button>
            </div>
            </>
        )
    }
}

export default SimCom;