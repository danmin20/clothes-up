import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

export default withRouter(({ history }) => {
  return (
    <Container>
      <div onClick={() => history.push("/woman")}>WOMAN</div>
      <div onClick={() => history.push("/man")}>MAN</div>
      <div onClick={() => history.push("/unisex")}>UNISEX</div>
      <div style={{ color: "black" }} onClick={() => history.push("/search")}>
        SEARCH
      </div>
    </Container>
  );
});

const Container = styled.div`
  height: 20px;
  padding: 15px 10px;
  font-size: 18px;
  background-color: #da291c;
  display: flex;
  justify-content: space-around;
  color: white;
  font-weight: 700;
  font-family: "LotteMartHappy", sans-serif;
`;
