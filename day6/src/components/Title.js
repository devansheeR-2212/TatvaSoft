import React from "react";

function Title(props){
    const key= props.key
    const about=props.info.desc
    return(
        <div>
   <h3>
       One of the healthcare related job is {key}. 
   </h3>
       <p>{about}</p>
</div>
    )

}

export default Title