import { useState, useReducer } from "react";
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

const todoItemsReducer = (currTodoItems, action) => {

  let newTodoItems = currTodoItems;
  if (action.type === 'NEW_ITEM' ) {
    newTodoItems = [
      ...currTodoItems,
      {
        name: action.payload.itemName, dueDate: action.payload.itemDueDate
      },
    ];

  } else if (action.type === 'DELETE_ITEM') {

  }
  return newTodoItems;
};


function App() {
  
 

 // const [todoItems, setTodoItems] = useState([]);
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => { 
    const newItemAction = {
      type: "New_ITEM",
      payload: {
        itemName,
        itemDueDate
      }
    };
    dispatchTodoItems(newItemAction);
    


      // setTodoItems((currValue) => 
      // [...todoItems,
      //  {name: itemName, dueDate: itemDueDate},
      // ]);
  };

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  const defaultTodoItems = [{name: "Sky Diving" , dueDate: "Today"}]

  return (
    <TodoItemsContext.Provider value={{
      todoItems,
      addNewItem,
      deleteItem,
      }}>
    <center className="todo-container">
       <AppName></AppName>
        <AddTodo></AddTodo>
        <WelcomeMessage ></WelcomeMessage>
        <TodoItems
         ></TodoItems>     
    </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
