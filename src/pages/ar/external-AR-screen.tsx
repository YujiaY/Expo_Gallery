import React from "react";
import WebView from "react-native-webview";

const ExternalARScreen = () => {
  return (
    <WebView
      source={{uri: "https://arvr-examples.vercel.app/"}}
      style={{marginBottom: 20, marginTop: 50}}
      allowsInlineMediaPlayback={true}
    />
  );
};

export default ExternalARScreen;
