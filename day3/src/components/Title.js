import React from "react";



function Title (state) {
    const {title, desc}= state
    //console.log(props.heading.name)



    return (
        <div>
            {/*<h3>This is the functional component</h3>*/}
            <p>{title}</p>
            <p>{desc}</p>
        </div>
    ); 
}

export default Title 