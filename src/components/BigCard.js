import React from "react";
import styled from "styled-components";

export default ({ url, text }) => {
  return (
    <>
      <Card style={{ backgroundImage: `url(${url})` }} />
      <Text>{text}</Text>
    </>
  );
};

const Card = styled.div`
  border-radius: 16px;
  width: 90%;
  height: 200px;
  background: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 8px 8px 20px 0 rgba(0, 0, 0, 0.1);
  background-size: contain;
  margin: 10px 0;
`;

const Text = styled.div`
  width: 100%;
  margin-bottom: 10px;
  justify-content: center;
  text-align: center;
`;
