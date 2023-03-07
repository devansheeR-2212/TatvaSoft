import React from "react";
import Title from './Title';

function List(){
    const datas=[
        {
            id:1,
            title: "Clinical jobs",
            desc:"Such as doctors, nurses, and surgeons"
        },
        {
            id:2,
            title: "Technical jobs",
            desc: "Such as phlebotomists and radiologists"
        },
        {
            id:3,
            title: "Administrative jobs",
            desc:"Such as hospital administrator and assistants"
        }
    ]
    //const dataList=datas.map((data)=> <h1>{data.title}</h1>)

    //const dataList=datas.map((data)=>
     //<div>
       // <h3>
         //   One of the healthcare related job is {data.title}. 
        //</h3>
         //   <p>{data.desc}</p>                    
    // </div>)

    const dataList=datas.map((data)=> ( <Title key={data.title} info={data}></Title>))

    //const dataList = datas.map( (data) => (<Title key={data.title} info={data}></Title>))
    return(
        <div>
            {dataList}
        </div>

    )
}

export default List