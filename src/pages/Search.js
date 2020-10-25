import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Camera } from "../assets";
import { withRouter } from "react-router-dom";
import { Header, Loader } from "../components";
import Intro from "../components/Intro";

export default withRouter(({ history }) => {
  const [previewURL, setPreviewURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const trigger = () => {
    setIsLoading(true);
    let form = new FormData();
    let image = document.getElementById("image");
    form.append("image", image.files[0]);

    const reader = new FileReader();
    const targetFile = image.files[0];
    reader.onloadend = () => {
      setPreviewURL(reader.result);
    };
    reader.readAsDataURL(targetFile);

    axios
      .post("https://clothesup.herokuapp.com/predict", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(function (response) {
        setIsLoading(false);
        history.push(`/result/${response.data.class_id}`);
      });
  };

  return (
    <>
      <Header />
      <div>
        {!isLoading ? (
          <>
            <BlankBox />
            <BlankImg
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Camera />
              <div>사진을 선택해주세요</div>
              <input
                id="image"
                type="file"
                style={{
                  marginTop: "5px",
                  position: "absolute",
                  zIndex: 0,
                  height: "375px",
                }}
                onChange={trigger}
              />
            </BlankImg>
          </>
        ) : (
          <>
            <Blur>
              <img
                alt={""}
                style={{
                  objectFit: "cover",
                  display: "flex",
                  margin: "0 auto",
                }}
                src={previewURL}
                width={"80%"}
                height={"375px"}
              />
            </Blur>
            <Loader />
          </>
        )}
      </div>
      <Intro />
    </>
  );
});

const BlankBox = styled.div`
  z-index: 1;
  width: 100%;
  height: 50px;
  background-color: #e0e0e0;
  position: absolute;
`;

const BlankImg = styled.div`
  height: 375px;
  background-color: #e0e0e0;
  justify-content: center;
  align-items: center;
  color: #a1a1a1;
`;

const Blur = styled.div`
  background-color: lightgray;
  opacity: 0.5;
  justify-content: center;
`;
