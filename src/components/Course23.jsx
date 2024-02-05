//this is for the part where we use the reduce method
import React from "react";
const Header=({course})=>{
    return <h1>{course.name}</h1>
}
const Part=({part})=>{
   
    return(
        <div>
            <p>{part.name}{part.exercises}</p>

        </div>
        
    );
}
const Content=({course})=>{
    return(
        <div>
           {course.parts.map((part)=><Part key={part.id} part={part}/>)}
        </div>
    );
}
const Course=({course})=>{
    const total = course.parts.reduce((sum,part)=> sum+part.exercises,0)

    return(
        <>
            <Header course={course}/>
            <Content course={course}/>
            <p>total of {total}exercises</p>
        </>
    )

}
export default Course23