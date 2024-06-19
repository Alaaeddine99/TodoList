import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
const AddTodo = ({add}) => {
const [inputtext,setInputText]=useState('')

const ajouterelement=()=>{
  add(
    {
      text:inputtext,
      id:uuidv4(),
      done:false
     }

  )
}
  return (
    <div>
       <div className="input-field">
      <input type="text" placeholder="Add" id="add-item"  onChange={(e)=>setInputText(e.target.value)}    />
      <button  onClick={()=>ajouterelement()}  >ADD</button>
      <i  className="fa fa-plus add" />
    </div>
    </div>
  )
}

export default AddTodo