import React, { useState } from "react";
import styled from "styled-components";
import { Camera } from "../../assets";
import { history } from "../../store/rootReducer";
import Header from "../header";

export default () => {
  const [file, setFile] = useState(undefined);
  const [previewURL, setPreviewURL] = useState("");

  const selectImg = (e) => {
    const reader = new FileReader();
    const targetFile = e.target.files[0];
    setFile(targetFile);

    reader.onloadend = () => {
      setPreviewURL(reader.result);
    };

    reader.readAsDataURL(targetFile);
  };

  if (file != undefined) {
    history.push("./result");
  }

  return (
    <>
      <Header />
      <div>
        {file === undefined ? (
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
                type="file"
                style={{
                  marginTop: "5px",
                  position: "absolute",
                  zIndex: 0,
                  height: "375px",
                }}
                onChange={selectImg}
              />
            </BlankImg>
          </>
        ) : (
          <img
            alt={""}
            style={{ objectFit: "cover", display: "flex", margin: "0 auto" }}
            src={previewURL}
            width={"80%"}
            height={"375px"}
          />
        )}
      </div>
    </>
  );
};

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
