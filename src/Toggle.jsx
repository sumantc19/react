import React, { useState } from 'react'

const Toggle = () => {
    const [data,setData] = useState("Sumant");
    const Clickme = ()=>{
       let val = data;
       (val==="Sumant")?setData("sam"):setData("Sumant")
    //    if(val==="Sumant"){
    //     setData("sam");
    //    }
    //    else{
    //      setData("Sumant")
    //    }
  
    }
  return (
    <>
       <h3>{data}</h3>
       <button  onClick={Clickme}>click me</button>
       
      
    </>
  )
}

export default Toggle