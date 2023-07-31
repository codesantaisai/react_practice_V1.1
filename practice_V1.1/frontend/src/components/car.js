import { Component } from "react";


class Car extends Component{
    constructor(){
        super();
        this.state = {color:"Blue",bike:"RS200" }
    }
    render(){
        return(
            <>
            <h3>My favourite color {this.state.color} and bike is {this.state.bike} </h3>
            <button onClick={()=>{this.setState((previousState)=>{return {...previousState, color:"Black"}})}}>change me</button>
            </>
            
        )
    }
}

export default Car;