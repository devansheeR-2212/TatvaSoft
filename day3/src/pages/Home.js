import React, {Component} from "react";
import Title from "../components/Title";

class Home extends Component{
    constructor(){
        super()
        this.state={
            body:"Hey!", 
            entitle:"Author of these books are Rhonda Byrne, Colleen Hoover and Dan Brown.",
            descrpt:"These describes the content about mystery, drama and self help book."
        }
    }

    showMore(){
        this.setState({
            body:"Happy Readingg!!!"
        } 

        )
    }
    render(){
            return( 
        <div>
            {/*<h2>This is the class component</h2>*/}
            <h1>{this.state.body}  </h1>
            <button onClick={()=> this.showMore()}>
               ClickMe
            </button>
            <Title title={this.state.entitle} desc={this.state.descrpt}></Title>
        </div>)
        
    }
}

export default Home