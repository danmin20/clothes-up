import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Header, SmallCard } from "../components";
import Map from "../components/Map";
import StockInfo from "../components/StockInfo";
import { results } from "../data/results";

export default withRouter(({ history }) => {
  const itemId = history.location.pathname.split("/")[2];
  return (
    <>
      <Header />
      <Container>
        {results.map(
          (item) =>
            item.id === itemId && (
              <>
                <Detail>
                  <Photo src={item.url} />
                  <div
                    style={{
                      marginTop: "10px",
                      fontSize: "20px",
                      fontWeight: "500",
                    }}
                  >
                    {item.name}
                  </div>
                  <Content>
                    <div>{item.price}</div>
                  </Content>
                </Detail>
                <Map />
                <StockInfo />
                <div
                  style={{
                    marginLeft: "20px",
                    marginTop: "40px",
                    fontFamily: "Recipekorea",
                    fontStyle: "italic",
                    color: "#da291c",
                    fontWeight: "700",
                    fontSize: "20px",
                  }}
                >
                  RECOMMEND
                </div>
                <Recommend>
                  {item.recommend.map((r) => (
                    <SmallCard url={r} />
                  ))}
                </Recommend>
              </>
            )
        )}
      </Container>
    </>
  );
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  flex: 0.7;
  align-items: center;
`;

const Photo = styled.img`
  margin-top: 20px;
  width: 300px;
  height: 300px;
`;

const Content = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  font-weight: 300;
`;

const Recommend = styled.div`
  display: grid;
  grid-auto-flow: column;
  overflow-x: scroll;
  overflow-y: hidden;
  grid-column-gap: 16px;
  padding: 10px 16px;
  position: relative;
  flex: 0.3;
`;
