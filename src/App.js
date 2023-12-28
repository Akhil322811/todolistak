
import './App.css';



import React from 'react'
import { useState } from 'react'
import "./index.css"



const App = () => {

  const [todo, setTodo] = useState("");
  const [todoList, SetTodoList] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleClick = () => {
    if (todo.trim() !== "") {
      SetTodoList([...todoList, { text: todo.trim(), checked: false }]);
      setTodo("");
    }
  }
    const handleTogleTodo = (index) => {
      const todoList1 = [...todoList];
      todoList1[index].checked = !todoList1[index].checked;
      SetTodoList(todoList1);
    }
    const handleDeleteTodo = (index) => {
      const todoList1 = [...todoList];
      todoList1.splice(index, 1);
      SetTodoList(todoList1);
    }
    return (
      <div>
      <div className='container'>
        <div >
          <h1>todo list</h1>
          <div>App</div>
          <input type='text' value={todo} onChange={handleChange} placeholder='Enter the task here' />
          <button onClick={handleClick}>ADD</button>
        </div>
      </div>
      <ul>
        {
          todoList.map((todos, index) => {
            return(
              <li key={index} style={{ display: 'flex' }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type='checkbox' checked={todos.checked} onChange={()=>handleTogleTodo(index)} />
                  <span style={{ marginRight: "10px", textDecoration: todos.checked ? "line-through" : "none" }}>
                    {todos.text}
                  </span>
                  <button style={{ marginTop: "5px", marginBottom: "5px" }} onClick={() => handleDeleteTodo(index)}>Delete</button>
                </div>
              </li>
            );
          })
        }
      </ul>
    </div>
    );
  
}

export default App;
