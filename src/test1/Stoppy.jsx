import react from "react"
import { useState } from "react"


const Stoppy = () =>{
    const [data,setData] = useState(0)

    const start=()=>{
        const interval = setInterval(()=>{
            setData(data + 1)
        },1000)

    const Pausyy = () =>{
        setData(data)
    }

    const Resetyyy = () =>{
        setData(0)
    }
       
    }
    return(
       <>
        <div>
            <h1>{data}</h1>
            <button onClick={start}>Start</button>
            <button onClick={Pausyy}>pause</button>
            <button onClick={Resetyyy}>reset</button>
        </div>
 
       </>
        
    )
}

export default Stoppy