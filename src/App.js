import React from "react"
import "./App.css"
import TaskInput from "./components/Taskinput";
import { useState } from "react";
import TaskItems from "./components/TaskItems";


function App() {
  
  const [toDoList, setToDoList] = useState([]);

  const addTask = (taskName) => {
    const newTask = {taskName , checked: false};
    setToDoList([...toDoList, newTask])
  }

  function toggleCheck(taskName)  {
    setToDoList((prevToDoList) => prevToDoList.map((task) => 
     task.taskName === taskName ? { ...task ,
     checked: !task.checked } :task
    
    ),)
  }

  function deleteTask(deleteTaskName) {
    setToDoList(toDoList.filter(task => task.taskName !== deleteTaskName))
  }

  return (
   <>
    <div className="container">
      <h1>To Do List</h1>

      <TaskInput addTask={addTask}/>

      <div className="toDoList">
        <span>To Do</span>
        <ul className="list-items">
            {toDoList.map((task,key)=> (
              <TaskItems  task={task} key={key}
               deleteTask={deleteTask}
               toggleCheck={toggleCheck}
              />
            ))}
        </ul>

        {toDoList.length === 0? <p className="notify">You are done!</p> : null}
      </div>
    </div>
   </>
  );
}

export default App;
