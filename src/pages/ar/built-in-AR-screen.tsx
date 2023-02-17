import React, {Component} from "react";
import WebView from "react-native-webview";

import {View} from "react-native";

const runFirst = `
      document.body.style.backgroundColor = 'red';
      setTimeout(function() { window.alert('hi') }, 1000);
     `;

export default class BuiltInARScreen extends Component {
  // const ARWebView = () => {
  render() {
    const html = `
      <html>
      <head>
          <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
          <!--      todo: Below external js file not working.-->

          <!-- we import arjs version without NFT but with marker + location based support -->
          <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>

<!--          <script src="https://cdn.jsdelivr.net/gh/aframevr/aframe@1c2407b26c61958baa93967b5412487cd94b290b/dist/aframe-master.min.js"></script>-->
<!--          <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"></script>-->
          <!--      todo: Below local js file not working.-->
<!--          <script src="../../common/test.js"></script>-->
      </head>
      <body>
      <div class="arjs-loader">
        <h1>Loading, please wait......</h1>
        <img 
          src="https://cloud.githubusercontent.com/assets/674727/25392020/6f011d10-298c-11e7-845e-c3c5baebd14d.jpg"
          alt="A-frame image"
          width="80%"
        >
        <!-- a-frame scene -->
        <a-scene>
          <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
          <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
          <a-sphere position="0 3.75 -5" radius="1.25" color="#CC2D22"></a-sphere>
          <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
          <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
          <a-sky color="#ECECEC"></a-sky>
        </a-scene>
        <!-- end of a-frame scene -->
      </div>

      <script>
          setTimeout(function () {
            window.ReactNativeWebView.postMessage("Hello! This is from built-in A-frame.")
          }, 1000)
      </script>
      
      </body>
      </html>
    `;

    return (
      <View style={{flex: 1}}>
        <WebView
          source={{html}}
          injectedJavaScriptBeforeContentLoaded={runFirst}
          onMessage={event => {
            alert(event.nativeEvent.data);
            console.warn(event.nativeEvent.data);
          }}
        />
      </View>
    );
  }
}

// export default ARWebView;
