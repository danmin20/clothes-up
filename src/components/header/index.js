import React from "react";
import styled from "styled-components";

export default () => {
  return (
    <Container>
      <div>WOMAN</div>
      <div>MAN</div>
      <div>SEARCH</div>
    </Container>
  );
};

const Container = styled.div`
  height: 20px;
  padding: 15px 10px;
  background-color: #da291c;
  display: flex;
  justify-content: space-around;
  color: white;
  font-family: "Recipekorea";
  font-style: italic;
`;
