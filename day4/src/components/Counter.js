import React, { Component } from "react";

class Counter extends Component{
    constructor(props){
        super(props)

        this.state={
            num: 0
        }
    }

    addd(){
        this.setState({
            num: this.state.num + 1
        })
    
    }      
    

    render() {
        return(
        <div>
         <div>Count-{this.state.num}</div>
         <button onClick={()=> this.addd()}>Increment</button>
        </div>
        );
    }
}

export default Counter