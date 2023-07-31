import { useState } from "react";

function Details (){
    // const [name,setName] = useState("jathu");
    // const [age,setAge] = useState(23);
    // const [place,setPlace] = useState("jeyapuram")
    // const [job,setJob] = useState("software engineer")

    const [startValue, setValue] = useState({
        name:"jathu",
        age:23,
        place:"jeyapuram",
        job:"software engineer"
    })   
        
    function updates (){
        setValue((priviosuState)=>{
            return {...priviosuState, name:"Mei"}
    
        })
    }

    function update(){
        setValue((priviosuState)=>{
            return {...priviosuState, age:25}
    
        })
    }

    return(
        <>
        <h1>My Info</h1>
        <p>Name : {startValue.name}</p> 

        <button onClick={updates}>change name</button>

        <p>Age: {startValue.age}</p>

        <button onClick={update}>change age</button>

        <p>Place:{startValue.place}</p>

        <button onClick={()=>{setValue({place:"Swiss"})}}>change place</button>

        <p>Job: {startValue.job}</p>

        <button onClick={()=>{setValue({job:"Billionre"})}}>change job</button>


        </>
    )
}


export default Details;