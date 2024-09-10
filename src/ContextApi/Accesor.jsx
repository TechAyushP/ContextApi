import React, { useContext } from 'react'
import { contextVariable } from './MyContext'

const Accesor = () => {
    let dataa=useContext(contextVariable)
    console.log(dataa);
    
  return (
    <div>
        <h1>count:{dataa.data}</h1>
        <button onClick={()=>{dataa.setdata(dataa.data+1)}}>Increment</button> <br />
        <button onClick={()=>{dataa.setdata(dataa.data-1)}}>Decrement</button> <br />
        <button onClick={()=>{dataa.setdata(dataa.data=0)}}>Reset</button>
      
    </div>
  )
}

export default Accesor
