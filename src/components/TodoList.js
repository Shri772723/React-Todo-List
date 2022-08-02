import React from 'react'

const TodoList = (props) => {
  return (
    <>
       <ul className="Alltodo">
              {props.todos.map((t) => (
                <li className="single_todo">
                  {" "}
                  <span className="todo_text" key={t.id}>
                    {t.todo}
                  </span>{" "}
                  <button onClick={()=> props.handleEdit(t.id)}>Edit</button> 
                  <button onClick={()=> props.handelDelete(t.id)}>Delete</button>
                </li>
              ))}
            </ul>
    </>
  )
}

export default TodoList
