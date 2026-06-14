import { useReducer } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItems from "./components/TodoItems";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItemsContextProvider, { TodoItemsContext } from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
    <center className="todo-container">
       <AppName></AppName>
        <AddTodo></AddTodo>
        <WelcomeMessage ></WelcomeMessage>
        <TodoItems
         ></TodoItems>     
    </center>
    </TodoItemsContextProvider>
    
  );
}

export default App;
