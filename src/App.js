import React from 'react'
import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
const App = () => {
const [todo,setTodo]=useState(
    [
    {text:"gazouz",id:1,done:false},
    {
        text:"7alib",id:2,done:false
    },{
        text:"9ahwa",id:3,done:false
    },
    {
        text:"ma9rouna",id:4,done:false
    }
]
)
const suprimer=(id)=>{
setTodo( todo.filter((el)=> el.id !== id)
)
}

const checkelement=(idtodo)=>{
  setTodo(
    todo.map((el)=> el.id === idtodo ? { ...el,done: !el.done} : el )
  )
}

const add=(newtodo)=>{
setTodo( [...todo,newtodo])
}



  return (
    <div>
      <>
  <header className="header">
    <h1>TODO List</h1>
  </header>
  <div className="container">
    {/* container mte3 el input ely heya tajouti fil data  */}
   <AddTodo  add={add}   />
   {/* affichage ely b3ed feha les 3 button mte3 kol element  */}
   <TodoList     todo={todo}  suprimer={suprimer}  checkelement={checkelement}   />
  
  </div>
</>
    </div>
  )
}

export default App


