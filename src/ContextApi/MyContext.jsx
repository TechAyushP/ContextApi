import React, { createContext, useState } from 'react'
export let contextVariable=createContext()

const MyContext = (props) => {
    console.log(props);
    let [data,setdata]=useState(10)
    


  return (
    
        <contextVariable.Provider value={{data,setdata}}>         
            {props.children}
        </contextVariable.Provider >

        
      
    
  )
}

export default MyContext
