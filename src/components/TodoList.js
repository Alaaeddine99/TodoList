import React from 'react'
import TodoElement from './TodoElement'

const TodoList = ({todo,suprimer,checkelement}) => {
  return (
    <div className="uncomp-tasks">
      
      <ul className="items">
{
    todo.map((el)=> <TodoElement  todo={el} suprimer={suprimer}  checkelement={checkelement} />  )
}
     
    

      </ul>
    </div>
  )
}

export default TodoList