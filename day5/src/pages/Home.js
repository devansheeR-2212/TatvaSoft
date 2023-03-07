import React, {Component} from "react";
import Title from "../components/Title";


class Home extends Component{
  /*   constructor(){
        super()
        this.state={
            changePage: false
        }
    }

    changePage(){
        this.setState(
            {
                changePage: true
            }
        )
    }*/

    render()
        
    {
         {/*let page
        if (this.setState.changePage){
            page= <About/>
        } */}
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
             {/*<button onClick={this.changePage.bind(this)}></button>*/}
            
        </div>
        )
    }
}

export default Home