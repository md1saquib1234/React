import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import "./App.css";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";

function App() {
   let foodItems = ["Sabzi", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

   let textStateArr = useState("Food Item Entered by user");
   let textToShow = textStateArr[0];
   let setTextState = textStateArr[1];
   console.log(`Current value of textState: ${textToShow}`);
   
  

   const handleOnChange = (event) => {
      console.log(event.target.value);
      setTextState = 
   };
 
 
 
  return (
    <>
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodInput handleOnChange={handleOnChange}></FoodInput>
      <p>{textToShow}</p>
      <FoodItems items={foodItems}></FoodItems>
      </Container>

      {/* <Container>
        <p>Above is the list of healthy food that are good for your health and well being.</p>
      </Container> */}
      </>
   
  );
}

export default App;
