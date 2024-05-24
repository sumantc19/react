import React from "react";
import {useTimer} from "use-timer"

const Stopwatch = () =>{
    const {time,start,pause,reset,status} =useTimer();
    return(
       <>
        <div>
             <h1 className="curtm" > {time}</h1>
            <button className="btn0" onClick={start}>Start</button>
            <button className="btn0" onClick={pause}>pause</button>
            <button className="btn0" onClick={reset}>reset</button>
        </div>
      
       
       </>
         
    )
}

export default Stopwatch;