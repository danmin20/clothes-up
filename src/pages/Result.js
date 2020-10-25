import React from "react";
import styled from "styled-components";
import { Header, SmallCard } from "../components";

export default () => {
  return (
    <>
      <Header />
      <Container>
        <Detail>
          <Photo src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhIWFRUXFxoVFRgXFxcYGBgXGBgXFxcVGBUYHSggGBolHRcWITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGC0dHx0tKy0tLS0tKy0tLS0tLS0tLSsrLS0tLS0tLS0tLS0tLSstKystLystLS0tLS0tLS0tN//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcEBQECAwj/xABLEAABAwICBQYJCQQIBwAAAAABAAIDBBESIQUGBzFRIkFhcZGxEyMycoGhssHRFCRCUnOCkqLwYmPC4SUzNENTk7PSFRc1RIOj8f/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EAB8RAQEAAgIDAQEBAAAAAAAAAAABAhExQQMhMhJRBP/aAAwDAQACEQMRAD8AvFERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBFqNa9Nto6WWocMWBvJbe2J5NmNvzXJC+ea/aTpOVxcat0Yv5MQYxo6BkXdpKm10+nUXy/TbQdJxuDhWyO6Hhj2nrDm/BXvs61q/4jSCVzQ2VrjHK0bsQAOJt9wIINubMZ2TZpKURFUFrJ9YKVji11RHiGRaHBzgeBa25BXpp15FPJhNnFpa22RxEWFjzFQDR+lIWMaGzMY2ws1zmt38wbfes3LXpvHHc2m41mpOedrfPDmDteAFtIZWuAc1wc05ggggjiCN6gb9LRWylYf8AyN+K2mpk4L5WsIwWa+zSCA4lwJuOc2F+pSZLcZpK0RFtzEWHpjSDaeCWd/kxMdIbbyGgmw6TZfNmntpGkaiRx+UvhZc2jhdga0cwxCznHpJz4BWQfT6L5Rg100g03bXVHplc71PJCuTY9rtNWtkgqXY5YwHtksAXsJsQ4DK4NswBfEOGbQspERQEREBERAREQEREBEWPX1rIY3SyuDGMBc5x3AD9bkGQvCsq44mF8r2sYN7nENA9JVM6y7YZ3lzKOMRN3CR/KkI4hvkt9OJV3pLS09Q7FPK+V2/luLrdQOQ9Czcl0sPalr/DVsbTU13Rh+N8hBAJAIa1gOZGZJJtuFlVMgbvzsu8l15NYc/V/wDeCm91p71EIa4tDg4A2xNN2nqNhcKdbMNdY9HveyVrjDLa5aLua5t7OtzixINs8goBhdusb+gD9ehSbUbVg1s5a5xbEwB0hbvzNmsbfcTY58GnoTsfSGitMQVDMcEzJG8WuBt0Eb2noK9ZKxo3Zno+KjOhdX6alHiIWMNrFwF3kdLzyj2rbBa2mmJp6ZxDc7C/NzG2RUK0zHGIqh7Wta50b2zMIFnYmlvhG5XY8XvcZGxuL5qfyMDhYjJRzWHQBfFJgAcTG4A7neSbDgfUsZTbeNQjUnQgEb5AWsDgyOzY2ucfBg8sOlZyXOxZkNubZW3qe6tYYiGRNDRwHE7yScyct6wtW4jPDjaBhJsMRN7Na1m7P6vFSOkoWx57z2AdQSf1b/G2jrRziy4rdKQQsMk00cbBvc9zWjquTvWI5Y9XTMkaWSNa9pyLXAOBHSCtbc9Kz2n7S4p4XUtE4ua4+Okw2DmjPBHfMgm13WtbIXvlT8rw7nsVPtqWp0dGWT0wLYpHFrmXJEb7Xbh58JAdkd1hxsK9DbH9d669emWTU0zWluGTGC0O8ktsSM2577G4vuNludUtYX0VRHUR/QNnt+vGfLYesZjpAK0k7XDDiv5It0iwI9TguoKQfU+rWu9FWgeBmAfzxSWZIPunyuttwpGvji/x/n0KWavbRdIUtg2cysH0JvGC3AOJxjtUuI+m0Wg1K1oj0hTiZgwuBwysvcseBe1+cEEEHgVv1kEREBERAREQFTW2/WQ+EZRtPIaBJL0uObGkfsjlfeHBXISvlnWvSXymrqJ94fK4t81vJZ+UBZyXFqBmUBXEfWubLDThdrXy47lw8Iw2IPSrB6TXxOxG7rnEeJ5yrj2Z6M8DRNf9KU+FdxwnJnowgH0lVbSUbZntYL4pH4WjPe51hu61fEUYiDQwWazCzqaGgDuV7IzKGfEDxBIXviWBQkCSUDdiBHpa3csuQor3a5dKw+Lf5ru4rpG9da93ipPMd7JQnLUagsApABuxu39d1Iyqq0ZpJ8cQtI8DFawLrXPQDxWyGkpBulf+J3vK8uPnmMk09Ofhtyt2sBzl5SSYWlx5gSodQawyMdy3GRmWK+9vSD7ipVpF3It9aw/EQPeu2Hkmc3HDPC43202t2i/ldDPERyi3Ey/+Izlt9Yt6SvnNq+oNIXsGNNv5Z+63pXzxrpo/wFbPGPJLvCM81/Ky6iSPurvhenPKdtfUtPJuScuf3dGQHoWMtoKcOw/SOEc9rZEkIKZnDvW2WtRxssyaAWuMrc3FYbwgnOyjWR1LWsaT4qdzYZB0uNo39YcexxX0gF8kaGdGH3ldhty2nPygQQMs75c3BfVmiK5s8EUzd0jGvF8jygDYgqZDLREWQREQEREGj140j8noKmUGxbE4N85wwt9ZC+WwbABXpt30lgo4oAc5pQT5kYxH8xYqJcsZctRyHZrlxzXkTuXqdyyoSgOSBd7ZH0qiZbNKAS10RBu2ISSdduQ09GbgfQrfh5RkaeJUD2LUVo5pSMy4Rt6m3c71ub+FTwNwvJ4lWkYlE/xzwf2e63uWzm3LSU8w+VSgcwZf04vgt2Tki14McV6VTrxv813cV5OC4nPIf5ru4qCvNCztaw52u1zQeBcLc3QT2r0cQN5Wu0dEHRWJIzO423hZ7Bc/FfNvD6OvdAVPq8YxGOL43fhcH/wqCkZEqbvf/VDo/gK9H+bt5/8AR05jdimJ5gLKsttWjg11POABcOidboONve9WtSU+EEneoPtXp/C0T3AX8E9kl+GZjPos8r2Y8vLVSOeMNxceTfryusgrxgAcCHbsgvUbl0YdS3f+t61p/XYVtDzrWS+V2qjmN5ve/Qr92EaTMlDJC43MMpA8yQYx6MWNUAFZ2wXSGCulhO6WG486JwI9T3diXgX2iIsAiIgIiIKN29VV6uCP6kJJ65HH/YFWWEqb7Y5S7ScwP0WxtHV4Nru9xUJj3LneW2PK3MeleoXlPTkWfcluIN6Lm9h6l3Fv1/NB3AzXoRkepdGdC5cMj1ILv2YR4KCH9rG8/ekcR6rD0KWStBzAzUf1IaRQ0vHwLCesgE96kDzldWrEdbSuZUPkdl4QNt1NxDtzW+Y7JQh+knu0i6FzjhZHcWNs3uHwG9TKBpt5R9Nj3AKRa5evCrPi3+Y72SvZ5I39o945l41PkP8ANd3FBXegqOR8V2RPcLnNouL5ZXWxGjZ/8CT8K3WoBtSDz3e5SHF/K2ZPoXmx8Eym9vRn5rMrNIvorVuR/KmJjb9UWxnrP0QtrWjlxNbkAT2AW94W1e51twHWT7viojpDS/gq2njfYtkD4wQDk82c29z+wR6V2w8cxnpxyzuV3UwzLela/WagD6GphG98Lx97CSPXZbCnN7L0lta3HLtXRzfMccwsL53At1ZruKpqxaiLCS3dYlvYSPcvELswypKq+5YpOeZ5lyOtZUOifCQTTXPiTHi6WyO8Hv6HYe1BjtA4qYbKJsGlaY8XOZ+KN477KHgWUg1LnwVtI/hURdheGnvQfVCIiwCIiAhRCg+a9q0l9KVXQ5g7Io1FIipJtLdfSdV9pbsa0e5RlmWa5NpXW6IwaGglI5U9VI/P6rAI226OS4/eUSDFbev1H4LROjIiMwwX6/BtLvWSqpvmlHETbLiQ2BPQvSy8qjc7qPvVg+iNXW2poBwijH5GrZy7lh0DbMYODWjsACypzySqqrKScv0vPzgYAPuui9+JWdCclUmqEnhK6ok33ff8UhI7grWpn5LMXp7v5/10rErf6t+f0HeyVllYWkB4qTzHeyVSNbqL/Y2dbvaKkMYso7qG/wCZx9bvaKkV/wBelZw+Y15PquszslWm1R5iZBUDeyqY4fdY91vyqx5HZKvNrDL0IPCoYe1jx71ucsXhYGiZw+NrhuIBHUVnPcodsyrDJQwk52aY/wABLPcpc45Ij5r1gjLaiZvCWQDqEjlrwt3roy1dUj968/icXW9a0hOS6sOFPtn2j/D0uk4ud1HiblflMcXNy6wFAWDNWzsMANVOw7jTWP42D3q9CqGm4yWy0TLhkjf9V7H/AIXA+5Y+kaEwTSwH+6kfF+Bxbf02XWB1r9qsH2CCuV5Uj7sYeLQe0Beq5giIgIiIPlzaBIDpKrP75w7Dh9y0Yjvyec5DrOQV066bGWVc76inqTA6Rxc9jm42Fx3lpDgW3Ods961mr2xB8VRHJUVbZI2ODyxjHAvwm4aSTkL2vvy7Vn8tbbbbZHhgpG8HOHY1oVKyjNXZt0d4qlA+u/1Nb/JUnU3vu7vis3lqcAK6T7j6UbfgP11JN5J6kR9H0Z5I6h3JpebBDI+/ksc7sBKpVmu9U4X8K5g5msDMrdLgT60qNdal8UkT5C9r2OYQ4NFri1wWgZqb9ta9b22myqDFJMfqiMntk99lZ9I5VxsiFvlROWUY7PCH3qeR1bA7N7fxBBtgdyxq0XieOLHD1Fe8MwI5Jv0jd2jJY9YeQ8fsnuKo0moTvmrB0u9oqUjcofqIfmrfOd3qUicXsd/eOI4rOHzGvJ9VxUZBQLaeL6OkPCaI+u3vU2qH3UU2ns/oyXzoj/7WLc5YvDE2N1N6Rzb+RK4W6w1/8RViyG6ojUXW1tEyVpjxF7g5pvYA2wkG1+A5lun7Tai5IMNvq4Hk9WLEO5XLkxm4ju0NttI1I4uB7WNKjTlstYdKGpqJJ3AAvw3A3ZNa3+G61jl0jnXMJzVqbDnkaReONO/1SREKq49+7u+KsvYvNbSbP2oZG9zv4VehodpdMY9K1g5jIHj77GOv2kqORq79qezKaunFTSSMEhaGSMkJAdhvhc1wBzsbEEcwUU0RsOrXPHympijjuL+DxSPI5wAWtaOvPqKmxdmrE4ko6Z4zxQRntY1bNY2jqJkEUcMYsyNjWMHBrQABfqCyVkEREBERAREQVTt3Bw0p5ry5dPi1TFQc1c23WQWpG8/jXf6Q96pmoK53l0nDza5cPORQLq8ZJEct3IQkW5Cl5Fm7Hz4uoPPiYPyu+Kmbp3A71DdkY+bzn96B+QfFTB4RYzhUG3FY1S4lj/Nd3JE5czjkO809yio/qZ/ZAecPd3qTRvDm5gEcCLi/UVHNRXD5IL7sbu9byIYTluWcPmN5/VdpYm/VHou32SFHtojB/wANnAHMw853SM5zmpFK9aHXsf0dU+YD2PYV0x5c6ooFdgugXZdXN6vO5eRXL0ag7Qqe7JJcOlKXp8I3tjk+CgbFMdmsltJ0Z/eW/E1496vQ+mkRFgEREBERAREQEREFO7cpvH07fqxPd+J7QPZVQyvzVn7cZvnsbfq07T2yP+CqyQ5rleXToXD9xRcO3FWIROyC7uXWHcuSl5Fo7Jh81mP77ujYpe1RLZcPmcnTK72WKTQk3KNRkNbYrmsNonngxx/KUC8tJkiCX7N3slRe2s1DF6QZZYnd627mlpWn1BqQ2lYDuLnd5UmlYDuUw+Yuf1WI5afXfPR9T9k71WK2snBarXAfMKr7GT2StxiqHXYFdAV2C7Obl+/sXCP+C4KD0ZvUs2d/9To/tW+9ROPepJqLLh0lRn99GO11veg+qERFgEREBERAREQEREFCbbZQdI24QRjtdIfeq1eM1YW2emkbpF8j2kMeyPwbyCGGzbFoduxAg5Xvmq+eOdc7y306BcyHIriy7Mic8hjGlznGzWgXJPAAbyk5HEe4Ltdcz07o3Oje0tewlrgd4cMiF0ulFtbMR8xPTK/uaPcpIG8FHtmg/o9v2jz+Yj3KTU+aNR6xBeelgPAS/Zv9krJAWHpZ3iJbn+7f7JUWctPqRDio2g7iXZ/eK3DS9hsTcLS6kVQbTRDjiPXyjuUmkaCFMeIuf1WJI5a7WZt6Kp+wk9hyz5W2Kx9KtvTTtPPFIO2Ny3Ga+egvQLyC7tXZycv3pdZWk9GTQeDMsZYJYxNHf6Ubr2d/LpCwwoPaJbjVmTDXUruE8P8AqtWnhKz9Egmqp8IJcZogAN5PhG2AVH16iIsAiIgIiICIiAiIg8qinZI0texr2ne1wDgesHIqL1ezTRUmZoo2n92XR+qMgKWoggn/ACj0V/gP/wA+f/ettoTULR9LIJYKZokbfC9znvLbixw4ybG3OFJUQRXWPZ7QVrzLNCRKfKfG90bncwLsJs42AzIJUZn2JURPJqKlo4Yond8d1aCIILozUF1JD4KnnMguTaYNG/OwdG3jfeDvWFJo6tjOdM5w4sdG4ejlA9oCsdFNNTKxXMTqkHlUdQOprT3OXrNo6pnaYmU0kYeMDpJDGA1rsnODQ4ucbXsLb1YNksp+V/aBaY1Wkh/skIfFkQxrmtfGQADhDrNc02va4Nyd6xRUyNHKgmaee8Unfa3YVY6WT8n7Vl8qL9zHk8A11+yy2OidDyzOtJG5kX0sQsXDMFoG/Pip4iTFLkhU+ynRLv8AtAPNklb3PXNJsr0TGQRRh1s+W+R49Ic4gqaItMtNrFqtSVsbY6mBrw3yDm1zN3kubYtGQyGWSh1RsT0a43a6oZ0NlBH52kqykQVtTbFdHNN3OqH9BlA9hoKlegtTaGkIMFNG143SEY5P8x93etb5EBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH/9k=" />
          <div style={{ fontSize: "20px", fontWeight: "500" }}>
            블랙야크 공용 롱플리스
          </div>
          <Content style={{ fontWeight: "300" }}>
            <div>가격 : 143,100원</div>
            <div>구매 가능 여부 : 가능</div>
            <div style={{ marginTop: "10px", fontWeight: "400" }}>
              근처 매장 재고
            </div>
            <div>용인 기흥점 : 42개</div>
            <div>수원점 : 30개</div>
          </Content>
        </Detail>
        <div
          style={{
            marginLeft: "20px",
            fontFamily: "Recipekorea",
            fontStyle: "italic",
            color: "#da291c",
          }}
        >
          RECOMMEND
        </div>
        <Recommend>
          <SmallCard
            url={
              "https://image.auction.co.kr/itemimage/18/49/40/1849402d46.jpg"
            }
          />
          <SmallCard
            url={
              "https://cdn.crewbi.com/images/goods_img/20171018/267878/267878_a_500.jpg?v=1541147792"
            }
          />
          <SmallCard
            url={
              "https://image.msscdn.net/images/prd_img/20171226/692228/detail_692228_6_500.jpg"
            }
          />
          <SmallCard
            url={
              "https://funshop.akamaized.net/products/0000076159/vs_image800.jpg"
            }
          />
        </Recommend>
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 94vh;
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
  margin: 30px;
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
