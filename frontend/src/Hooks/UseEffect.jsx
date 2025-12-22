import React from 'react'
import { useState } from 'react';

const useEffect = () => {
const [count,setcount]=useState(0);
const [value,setvalue]=useState9("");
      useEffect(()=> {
           console.log("UseEffect Mounted")
      }, [count,value])
      return (
    <>
    <div>useEffect</div>
    <h1>{count}</h1>
    <button onClick={()=>setcount(count=1)}>increament</button>
    </>
  )
}

export default useEffect