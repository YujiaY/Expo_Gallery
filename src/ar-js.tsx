import React, {Component} from "react";
import WebView from "react-native-webview";

import {SafeAreaView, Text} from "react-native";

class PZARWebView extends Component {
  render() {
    return (
      <SafeAreaView>
        <WebView source={{uri: "https://reactnative.dev/"}} />
        <Text>Something in the PZARWebView</Text>
      </SafeAreaView>
    );
  }
}

export default PZARWebView;
