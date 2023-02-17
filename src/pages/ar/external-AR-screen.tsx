import React from "react";
import WebView from "react-native-webview";

const ExternalARScreen = () => {
  return (
    <WebView
      source={{uri: "https://flat-video-aframe.vercel.app/"}}
      style={{marginBottom: 20, marginTop: 50}}
    />
  );
};

export default ExternalARScreen;
