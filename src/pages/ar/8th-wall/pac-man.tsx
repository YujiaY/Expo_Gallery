import React from "react";
import WebView from "react-native-webview";

const PacMan = () => {
  return (
    <WebView
      source={{
        uri: "https://toolofnorthamerica.8thwall.app/pizza-hut-pacman-demo/",
      }}
      style={{marginBottom: 20, marginTop: 50}}
      allowsInlineMediaPlayback={true}
    />
  );
};

export default PacMan;
