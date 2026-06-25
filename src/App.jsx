import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import Recipe from "./components/Recipe";

export default function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId,setFoodId] = useState("656329")
  return (
    <div>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <Recipe foodId={foodId}/>
        </InnerContainer>
      </Container>
    </div>
  );
}
