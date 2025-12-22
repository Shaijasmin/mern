import React, { useState } from 'react'

const usestate = () => {
    const[count,setCount]=useState(0);
    const[value,setvalue]=useState("");
    const handleIncrement=()=>{
        setCount(count+1) }
    const handleDr
    }
  return (
    <div>
        <h1>{count}</h1>
        {/* <button onclick={()=>setcount(count+1)}>Increament</button>*/}
        <button onClick={handleIncrement}>Increament</button>

    </div>
  )
}

export default usestate

