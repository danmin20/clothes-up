/*global kakao*/
import React, { useEffect } from "react";

export default () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=cd5815dbeb4283d90c51b2c3d620b50c&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        let container = document.getElementById("Mymap");
        let options = {
          center: new kakao.maps.LatLng(37.506502, 127.053617),
          level: 7,
        };

        const map = new window.kakao.maps.Map(container, options);
        let markerPosition = new kakao.maps.LatLng(37.506502, 127.053617);
        let marker = new kakao.maps.Marker({
          position: markerPosition,
        });

        marker.setMap(map);
      });
    };
  }, []);
  return <div id="Mymap" style={{ width: "100%", height: "300px" }} />;
};
