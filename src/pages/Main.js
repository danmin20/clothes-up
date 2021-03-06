import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

export default withRouter(({ history }) => {
  return (
    <Container
      onClick={() => {
        history.push("/list/woman");
      }}
    >
      <Title>클로즈업</Title>
    </Container>
  );
});

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #da291c;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-family: "LotteMartHappy", sans-serif;
  font-size: 30px;
  font-style: italic;
  color: white;
`;
