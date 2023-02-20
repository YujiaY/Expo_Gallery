import React from "react";
import WebView from "react-native-webview";

const ImageTracking = () => {
  return (
    <WebView
      source={{uri: "https://8thwall.8thwall.app/flyer-aframe/"}}
      style={{marginBottom: 20, marginTop: 50}}
      allowsInlineMediaPlayback={true}
    />
  );
};

export default ImageTracking;
