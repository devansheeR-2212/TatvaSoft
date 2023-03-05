import React, {Component} from "react";
import Title from "../components/Title";

class Home extends Component{

    render(){
        const heading =[
            {
                name: "The Secret",
                price: 500
            },
            {
                name: "It starts with us",
                price: 350
            },
            {
                name: "The DaVinci Code",
                price: 400
            },
        ]
        return(
        <div>
             <h2>This is the class component</h2>
             {heading.map( (obj)=> {return <Title book= {obj}/>} )}
            
        </div>
        )
    }
}

export default Home