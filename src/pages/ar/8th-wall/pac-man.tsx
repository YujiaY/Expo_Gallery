import React, {useEffect, useState} from "react";
import WebView from "react-native-webview";
import {Camera} from "expo-camera";
import {Text} from "react-native";

const PacMan = () => {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      // const {status} = await Camera.requestCameraPermissionsAsync();
      const {status} = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <Text>null access to camera</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera. Please allow access.</Text>;
  }
  if (hasPermission) {
    return (
      <WebView
        source={{
          uri: "https://toolofnorthamerica.8thwall.app/pizza-hut-pacman-demo/",
        }}
        style={{marginBottom: 20, marginTop: 50}}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
      />
    );
  }
};

export default PacMan;
