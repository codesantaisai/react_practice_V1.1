import {useState}  from "react"
function MyForm (){


    const [input, setInput] = useState("")

    // console.log(name);


    function handleSubmit (e){
        e.preventDefault()
        console.log("Form Submited");
        console.log(input);

    }
    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        setInput((previousState)=>{return {...previousState, [name]:value}})

    }
    
    return (
        <>
        <form onSubmit={handleSubmit}>
        <label>Enter name:<input type="text" name="name"onChange={handleChange}></input></label><br/>
        <label>Enter age:<input type="text" name="age" onChange={handleChange}></input></label><br/>
        <label>Enter email:<input type="text" name ="email"onChange={handleChange}></input></label><br/> 

        <input type="submit" value = "submit"></input> 
        </form>
        </>
    )

}


export default MyForm;