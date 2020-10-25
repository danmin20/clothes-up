import React from "react";
import styled from "styled-components";

export default ({ url }) => {
  return <Card style={{ backgroundImage: `url(${url})` }} />;
};

const Card = styled.div`
  border-radius: 16px;
  width: 150px;
  height: 200px;
  background: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 8px 8px 20px 0 rgba(0, 0, 0, 0.1);
  background-size: contain;
`;
