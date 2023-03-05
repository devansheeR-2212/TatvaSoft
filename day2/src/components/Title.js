import React from "react";



function Title (props) {
    //console.log(props.heading.name)



    return (
        <div>
            
            <p>
                One of my favourite book is {props.book.name}.
                Price of this book is {props.book.price}.
            </p>
          
        </div>
    ); 
}

export default Title 