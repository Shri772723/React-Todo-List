import "./App.css";
import { useState } from "react";
function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId){
      const editTodo=todos.find((i)=>i.id === editId);
      const updatedTodos=todos.map((t)=>
      t.id===editTodo.id
      ?(t={id: t.id, todo })
      :{id: t.id, todo: t.todo}
      );
      setTodos(updatedTodos)
      setEditId(0)
      setTodo('')
      return;
    }

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo([])
      }

     
  }
  ;

  const onChangeHandler = (event) => {
    setTodo(event.target.value);
  };

  const handelDelete =(id)=>{
    const delTodo=todos.filter((to)=>to.id !== id);
    setTodos([...delTodo]);
  }

  const handleEdit =(id)=>{
    const editTodo =todos.find((i)=>i.id === id)
    setTodo(editTodo.todo)
setEditId(id)
  }
  return (
    <>
      <div className="app">
        <div className="container">
          <div className="app-things mt-5">
            <h1 className="text-center pt-5">Todo List App</h1> <br />
            <form action="" className="todoform" onSubmit={handleSubmit}>
              <input type="text" value={todo} className="input" onChange={onChangeHandler} />
              <button type="submit">{editId ? 'Edit': 'Add'}</button>
            </form>
            <ul className="Alltodo">
              {todos.map((t) => (
                <li className="single_todo">
                  {" "}
                  <span className="todo_text" key={t.id}>
                    {t.todo}
                  </span>{" "}
                  <button onClick={()=> handleEdit(t.id)}>Edit</button> 
                  <button onClick={()=> handelDelete(t.id)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
}

export default App;
