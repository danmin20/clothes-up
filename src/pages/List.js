import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { BigCard, Header, SearchBar } from "../components";
import { woman, man, unisex } from "../data/lists";

export default withRouter(({ history }) => {
  const itemId = history.location.pathname.split("/")[2];
  return (
    <>
      <div style={{ position: "fixed", width: "100%", top: "0" }}>
        <Header />
        <SearchBar />
      </div>
      <List>
        {itemId === "woman" &&
          woman.map((item) => <BigCard url={item.url} text={item.name} />)}
        {itemId === "man" &&
          man.map((item) => <BigCard url={item.url} text={item.name} />)}
        {itemId === "unisex" &&
          unisex.map((item) => <BigCard url={item.url} text={item.name} />)}
      </List>
    </>
  );
});

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-auto-flow: row;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 10px 16px;
  margin-top: 110px;
`;
