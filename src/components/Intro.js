import React from "react";

export default () => {
  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <div
        style={{
          fontFamily: "LotteMartHappy",
          color: "#da291c",
          fontStyle: "italic",
          marginTop: "50px",
          fontSize: "30px",
          fontWeight: "700",
        }}
      >
        CLOTHES-UP
      </div>
      <div
        style={{
          fontFamily: "LotteMartHappy",
          fontStyle: "italic",
          color: "#da291c",
          fontSize: "20px",
        }}
      >
        클로즈업
      </div>
      <div style={{ marginTop: "20px" }}>
        옷을 찍어 업로드하면, 옷 정보를 알려줍니다!
      </div>
      <div style={{ marginTop: "10px" }}>
        구매 가능한 매장과, 재고 수를 알려주어
      </div>
      <div> 더욱 편리한 쇼핑을 경험하실 수 있습니다.</div>
    </div>
  );
};
