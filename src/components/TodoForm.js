import React from 'react'

const TodoForm = (props) => {
  return (
    <div>
       <form action="" className="todoform" onSubmit={props.handleSubmit}>
              <input type="text" value={props.todo} className="input" onChange={props.onChangeHandler} />
              <button type="submit">{props.editId ? 'Edit': 'Add'}</button>
            </form>
    </div>
  )
}

export default TodoForm
