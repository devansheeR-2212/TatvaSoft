import React from "react";
import './Title.css';



function Title (props) {
    //console.log(props.heading.name)



    return (
        <div className="main">
            
            <p className="first">
                One of my favourite book is {props.book.name}.
            </p>
            <p className="second">
             Price of this book is {props.book.price}.
            </p>
          
        </div>
    ); 
}

export default Title     