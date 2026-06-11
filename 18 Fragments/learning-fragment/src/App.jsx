import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import "./App.css";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";

function App() {
   

   
   let [foodItems , setFoodItems] = useState([
    "Sabzi", 
    "Green Vegetable",
    "Roti", 
    "Salad", 
    "Milk", 
    "Ghee"])
   
   console.log(`Current value of textState: ${textToShow}`);
   
  

   const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItems = event.target.value;
       console.log('Food value entered is ' + newFoodItems);
    }
     
    
   };
 
 
 
  return (
    <>
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodInput handleKeyDown={onKeyDown}></FoodInput>
      
      <FoodItems items={foodItems}></FoodItems>
      </Container>

      {/* <Container>
        <p>Above is the list of healthy food that are good for your health and well being.</p>
      </Container> */}
      </>
   
  );
}

export default App;
