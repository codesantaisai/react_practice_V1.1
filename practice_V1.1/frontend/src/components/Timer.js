import {useState, useEffect} from 'react'

function Timer (){
    const [count , setCount] = useState(1)

    useEffect(()=>{
        console.log("Screen Rendered");
        checkCount()
        // setCount(1)
        // setTimeout(()=>{
        //     setCount((previousCount)=>{return previousCount+1})
        // },1000)
    })
    
   function updateCount(){
        setCount((previousCount)=>{return previousCount+1})
    }

    function checkCount(){
        if(count>30){
            setCount(1);
        }
    };

    return (
        <>
        <h1>Hello, I have rendered {count} times!</h1>
        <button onClick={updateCount}> Increase Count</button>
        </>
    )
}

export default Timer;