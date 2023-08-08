import React from "react";
import TodoContainer from "./TodoContainer";
import Sidebar from "./Sidebar";
import { HomeContainer } from "./CustomStyledComponents"


const Home = (props) => {
  return (
    <HomeContainer>
      <Sidebar />
      <TodoContainer />
    </HomeContainer>
  );
}

export default Home;
