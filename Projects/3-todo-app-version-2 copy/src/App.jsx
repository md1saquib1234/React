import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  
  const todoItems = [
    { name: 'Buy Milk',
      dueDate: '4/10/2023',
    },
      { name: 'Go to College',
      dueDate: '4/10/2023',
    },
    { name: 'Go to Gym',
      dueDate: '4/10/2023',
    },
  ];

  return (
    <center className="todo-container">
       <AppName></AppName>
        <AddTodo></AddTodo>
        <TodoItems todoItems={todoItems}></TodoItems>
        
       
      
    </center>
  );
}

export default App;
