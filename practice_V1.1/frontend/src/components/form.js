import {useState}  from "react"
function MyForm (){


    const [name, setname] = useState("")

    console.log(name);
    
    return (
        <>
        <label>Enter name:<input type="text" onChange={(e)=>{setname(e.target.value)}}></input></label>    
        </>
    )

}


export default MyForm;