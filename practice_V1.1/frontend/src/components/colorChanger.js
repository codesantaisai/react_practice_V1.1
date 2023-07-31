import {React,useState} from 'react'

function ColorChanger() {
    // const color = "blue"
    const [color,setColor] = useState('blue')
    
  return (
    <>
    <p>My name is {color}</p>
    <button onClick={()=>{setColor('red')}}>change</button>
    
    </>
  )
}

export default ColorChanger;
