import React from "react";
import {Text, View} from "react-native";
import WebView from "react-native-webview";

const HelloWorldView = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}>
      <Text>Hell o, world View!</Text>
      <WebView source={{uri: "https://reactnative.dev/"}} />
    </View>
  );
};

export default HelloWorldView;
