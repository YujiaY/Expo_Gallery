import React, {useEffect, useState} from "react";
import {WebView} from "react-native-webview";
import {Text} from "react-native";
import {Camera} from "expo-camera";

const ImageTracking = () => {
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
        source={{uri: "https://8thwall.8thwall.app/flyer-aframe/"}}
        style={{marginBottom: 20, marginTop: 50}}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
      />
    );
  }
};

export default ImageTracking;
