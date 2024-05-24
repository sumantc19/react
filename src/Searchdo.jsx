import React, { useState } from 'react'

const Searchtodo = () => {
    const [data,setData] = useState("");
    const [items,setItems] = useState([]);
    const [search,setSearch] = useState("");
    const [scale, setScale] = useState(1);

    const changeme = (e)=>{
        setData(e.target.value)
    }
    const update =()=>{
        if(data.trim()!==""){
            setItems((olditems)=>{
                return[...olditems,data];
            })
            setData("");
        }
    }
   const removeitem=(index)=>{
    let deleteditem = items.filter((val,id)=>{
        return index!==id
    })
    setItems(deleteditem);
   }
   const deleteall = ()=>{
    setItems([])
   }
   const increment = ()=>{
    setScale((prevScale) => prevScale + 0.1);
   }
   const decrement = ()=>{
    setScale((prevScale) => prevScale - 0.1);
   }
   const editItem = (index,newText)=>{
    const updatesitems =[...items];
    updatesitems[index] = newText;
    setItems(updatesitems);
   }
  return (
    <>
     <div className='nav' style={{ transform: `scale(${scale})` }}>
     <div className='main'>
        <h1 style={{marginLeft:"20px"}}>TO-DO list</h1>
        <div>
            <button className='incbtn' onClick={increment}>+</button>
            <button className='decbtn' onClick={decrement}>-</button>
        </div>
     <div className='main1'>
      
      <input className='submain1' onChange={changeme} type="text" placeholder='Enter items' value={data} />
       <button className='btnup' onClick={update}>Add</button>
      {/* </div>
    <div className='main2'> */}
    <input className='submain2' type="text" placeholder='search here' onChange={(e)=>setSearch(e.target.value.toLocaleLowerCase())} />
    </div>

       <ul className='ulist'>
       {items.filter((res)=>res.toLowerCase().includes(search)).map((val,index)=>{
        return(
            <div style={{display:"flex"}} key={index}>
                 
                <li className='names'>{val}</li>
                 <button className='edit' onClick={()=>editItem(index,prompt("enter new value"))}>edit</button>
                <button className='delete' onClick={()=>removeitem(index)}>Delete</button>
            </div>
        )
       })}
       </ul>
       {items.length>1 && <button onClick={deleteall}>Delete All</button>}
     </div>
     </div>

    </>
    
  )
}




export default Searchtodo