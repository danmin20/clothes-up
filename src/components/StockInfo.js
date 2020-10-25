import React from "react";
import styled from "styled-components";

export default () => {
  return (
    <Container>
      <div>용인 기흥점 : 42개</div>
      <div>수원점 : 30개</div>
    </Container>
  );
};

const Container = styled.div`
  z-index: 3;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: -60px;
  margin-left: auto;
  background-color: white;
  opacity: 0.8;
  margin-right: 10px;
  padding: 10px;
  border-radius: 20px;
  font-size: 15px;
  justify-content: center;
`;
