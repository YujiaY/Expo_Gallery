import React from "react";
import WebView from "react-native-webview";

const myHtmlFile = require("./index.html");

const WebViewWithLink = () => {
  return (
    <WebView
      source={{uri: "https://reactnative.dev/"}}
      style={{marginBottom: 20, marginTop: 50}}
    />
  );
};

export default WebViewWithLink;
