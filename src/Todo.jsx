import React, {useState } from 'react'



const Todo = () => {
   
    const [data,setData] = useState("")
    const [items,setItems] = useState([])

   const change=(e)=>{
      setData(e.target.value)
    }
    const itemlist=()=>{
        setItems((olditems)=>{
            return[...olditems,data]
        })
      setData("")
    }
  
    const deleteitems=(index)=>{
        const removeditem = items.filter((val,id)=>{
            
            return index!==id
        })
       setItems(removeditem);
    }
    const deleteall=()=>{
        setItems([])
    }
    
   
  return (
   <>
    <div>
   
        <input type="text"  onChange={change} value={data}/>
        
        <button onClick={itemlist}>Add</button>
     
    
       <ul>
            {items.map((res,index)=>{
                return(
                    <div key={index}>
                    <div style={{display:"flex"}} >
                      
                        <li>{res}</li>
                      
                        <button  onClick={()=>deleteitems(index)}>Delete</button>
                    </div>

                    </div>
                )
            })}
        </ul>
         {items.length>1 &&  <button onClick={deleteall}>Delete All</button>}

    </div>
   </>
  )
}

export default Todo