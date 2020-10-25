import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

export default withRouter(({ history }) => {
  const itemId = history.location.pathname.split("/")[2];
  return (
    <Container>
      <div
        style={{ color: itemId === "woman" && "gray" }}
        onClick={() => history.push("/list/woman")}
      >
        WOMAN
      </div>
      <div
        style={{ color: itemId === "man" && "gray" }}
        onClick={() => history.push("/list/man")}
      >
        MAN
      </div>
      <div
        style={{ color: itemId === "unisex" && "gray" }}
        onClick={() => history.push("/list/unisex")}
      >
        UNISEX
      </div>
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
