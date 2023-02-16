import React from "react";
import WebView from "react-native-webview";

import {Text, View} from "react-native";

const myHtmlFile = require("./index.html");

const PureWebView = () => {
  return (
    <View style={{flex: 1}}>
      <WebView
        originWhitelist={["*"]}
        containerStyle={{width: "100%", height: "100%"}}
        source={{
          html: `
          <body>
            <h1>This is a static HTML source!</h1>
            <form>
            <input type="button" value="Show" onclick="show()"/>
            </form>
            <script src="./common/test.js"></script>
          </body>
        `,
        }}
      />
      <Text style={{width: "100%"}}>Something in the Pure WebView</Text>
    </View>
  );
};

export default PureWebView;
