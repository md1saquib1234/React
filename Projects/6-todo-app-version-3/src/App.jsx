import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItems from "./components/TodoItems";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  
 

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    
    const newTodoItem = [...todoItems,
       {name: itemName, dueDate: itemDueDate},
      ];
      setTodoItems(newTodoItem);
  }

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);

  }

  return (
    <center className="todo-container">
       <AppName></AppName>
        <AddTodo onNewItem={handleNewItem}></AddTodo>
        {todoItems.length === 0 && <WelcomeMessage ></WelcomeMessage>}
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
        
       
      
    </center>
  );
}

export default App;
