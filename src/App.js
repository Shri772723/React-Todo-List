import "./App.css";
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
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
           <TodoForm handleSubmit={handleSubmit} todo={todo} editId={editId} setTodo={setTodo} onChangeHandler={onChangeHandler}/>
           <TodoList handleEdit={handleEdit} handelDelete={handelDelete} todos={todos} />
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
}

export default App;
