import React from "react";
import styled from "styled-components";
import { BigCard, Header, SearchBar } from "../components";

export default () => {
  return (
    <>
      <div style={{ position: "fixed", width: "100%", top: "0" }}>
        <Header />
        <SearchBar />
      </div>
      <List>
        <BigCard
          url={
            "https://image.musinsa.com/images/goods_img/20200305/1336832/1336832_1_320.jpg"
          }
          text={"밴딩 롱스커트"}
        />
        <BigCard
          url={
            "https://image.musinsa.com/images/goods_img/20200928/1627399/1627399_1_320.jpg"
          }
          text={"머메이드 투피스"}
        />
        <BigCard
          url={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkYhZQ9v-x5wTPLzIL9qAR2gbQPGGquKrVGg&usqp=CAU"
          }
          text={"버버리 신상 원피스"}
        />
        <BigCard
          url={
            "https://image.musinsa.com/images/goods_img/20200825/1562636/1562636_1_320.jpg"
          }
          text={"버튼 원피스"}
        />
        <BigCard
          url={
            "https://image.musinsa.com/images/goods_img/20200825/1562635/1562635_1_320.jpg"
          }
          text={"꽃무니 원피스"}
        />
      </List>
    </>
  );
};

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
