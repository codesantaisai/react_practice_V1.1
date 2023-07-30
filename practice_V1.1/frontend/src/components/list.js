import React from 'react'
import Test from './testList'


function List() {

    const numbers = [1,2,3,4,5]
    const bookInfo = [{book:"RichDad", author:"robert kyosaki"},{book:"48 Laws of power", author:"robert greene"}];
    // const bookInfo = {book:"x", author:"Y"}

  return (
    <>
    <ul>
        {numbers.map((e,index)=>{return <li key={index}>{e}</li>})}
    </ul>
    <Test bookInfo = {bookInfo}/>
    </>
    
  )
}

export default List;
