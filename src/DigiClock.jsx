import React, { useState } from 'react'

const DigiClock = () => {
    let time = new Date().toLocaleTimeString();
    const [curtime,setCurtime] = useState(time)

    const updatetime = ()=>{
        let time = new Date().toLocaleTimeString();
        setCurtime(time)
    }
    setInterval(updatetime,1000)
  return (
    <>
      <h1 onChange={updatetime}>{curtime}</h1>
    </>
  )
}

export default DigiClock