
//import './App.css';



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
    SetTodoList(...todoList, todo);
    console.log(SetTodoList);
  }

  const handleTogleTodo = (index)=>{
const todoList = [...todo];
todoList[index].checked=!todoList[index].checked;
setTodo("todoList")
  }
  const handleDeleteTodo=(index)=>{
const todoList = [...todo];
todoList.splice(index,1);
setTodo("todoList");
  }


  return (
    <>
      <div className='container'>
        <div >
          <h1>todo list</h1>
          <div>App</div>
          <input type='text' value={todo} onChange={(e)=> handleChange(e)} placeholder='Enter the task here' />
          <button onClick={handleClick}>ADD</button>
          <div>
          </div>
        </div>
      </div>
      <ul>
      {
        todoList.map((todo,index)=>{
          <li key={index} style={{display:'flex'}}>
            <div style={{display:"flex",alignItems:"center"}}>

            
            <input type='checkbox' checked={todo.checked}  onChange={()=> handleTogleTodo(index)}  />
            <span style={{marginRight:"10px",textDecoration:todo.checked ? "line-through":"none"}}>
              {todo.index}
            </span>
            <button style={{marginTop:"5px", marginBottom:"5px"}} onClick={()=>handleDeleteTodo(index)}>Delete</button>
            </div>
          </li>
        })
      }
      </ul>
    </>
  )
}

export default App
