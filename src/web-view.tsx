import React from "react";
import WebView from "react-native-webview";

import {Text, View} from "react-native";

const PZARWebView = () => {
  const html = `
      <html>
      <body>
<!--        <script src="https://cdn.jsdelivr.net/gh/aframevr/aframe@1c2407b26c61958baa93967b5412487cd94b290b/dist/aframe-master.min.js"></script>-->
<!--        <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"></script>-->
        <script src="./common/test.js"
        <script>
          setTimeout(function () {
            window.ReactNativeWebView.postMessage("Haha Hello!")
          }, 2000)
        </script>
        <div class="arjs-loader">
          <div>Loading, please wait...</div>
        </div>
      </body>
      </html>
    `;
  return (
    <View style={{flex: 1}}>
      <WebView
        style={{width: "100%"}}
        source={{html}}
        onMessage={event => {
          // eslint-disable-next-line no-alert
          alert(event.nativeEvent.data);
        }}
      />
      <Text>Haa Ha Something in the PZARWebView</Text>
    </View>
  );
};

export default PZARWebView;
