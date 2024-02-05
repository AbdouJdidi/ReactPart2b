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
    let TotalExercises=0;
    course.parts.map((part)=>TotalExercises+=part.exercises)
    return(
        <div>
           {course.parts.map((part)=><Part key={part.id} part={part}/>)}
            <p>total of {TotalExercises} exercises</p>
        </div>
    );
}
const Course=({course})=>{
    return(
        <>
            <Header course={course}/>
            <Content course={course}/>
        </>
    )

}
export default Course