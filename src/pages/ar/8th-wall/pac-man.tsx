import React, {useEffect, useState} from "react";
import WebView from "react-native-webview";
import {Text} from "react-native";
import {Camera, PermissionStatus} from "expo-camera";
import * as Device from "expo-device";

// enum DeviceType {
//   UNKNOWN = 0,
//   PHONE,
//   TABLET,
//   DESKTOP,
//   TV,
// }

const PacMan = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [deviceType, setDeviceType] = useState(0);

  useEffect(() => {
    (async () => {
      const {status} = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === PermissionStatus.GRANTED);

      const checkedDeviceType = await Device.getDeviceTypeAsync();
      setDeviceType(checkedDeviceType);
    })();
  }, []);

  if (deviceType !== 1 || hasPermission === null) {
    return (
      <Text>
        Please check you are using an real mobile or mobile camera is working.
      </Text>
    );
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
