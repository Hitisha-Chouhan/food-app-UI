import { useState } from 'react'
import './App.css'
import ErrorPage from './comp/ErrorPage'
import FoodItems from './comp/FoodItems'
import FirstHeading from './comp/FirstHeading'
import Container from './comp/Container'
import FoodInput from './comp/FoodInput'
function App() {
  

 

  let [currentFoodItems , newFoodItems]=useState([])

  const OnKeyDown = (event) => {
    if(event.key === "Enter"){

      let newValue=event.target.value;
      event.target.value="";
      let newFoodItemArr=[...currentFoodItems , newValue];
      newFoodItems(newFoodItemArr);
  
      console.log(newFoodItems)
    }

  }
  return (
    <Container>
   <FirstHeading></FirstHeading>
   <FoodInput handleOnKeyDown ={OnKeyDown}></FoodInput>

   <ErrorPage fooditem={currentFoodItems }></ErrorPage>
  
    <FoodItems fooditem={currentFoodItems }></FoodItems>
    </Container>
  )
}

export default App
