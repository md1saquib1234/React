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
import { TodoItemsContext } from "./store/todo-items-store";
function App() {
  
 

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {  
      setTodoItems((currValue) => 
      [...todoItems,
       {name: itemName, dueDate: itemDueDate},
      ]);
  }

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  const defaultTodoItems = [{name: "Buy ghee", dueDate: "Yesterday"}]

  return (
    <TodoItemsContext.Provider value={defaultTodoItems}>
    <center className="todo-container">
       <AppName></AppName>
        <AddTodo onNewItem={handleNewItem}></AddTodo>
        <WelcomeMessage todoItems={todoItems}></WelcomeMessage>
        <TodoItems
         todoItems={todoItems} 
         onDeleteClick={handleDeleteItem}
         ></TodoItems>     
    </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
