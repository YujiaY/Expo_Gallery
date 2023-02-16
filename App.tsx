import * as React from "react";
import {Alert, Button, Text, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import WebView from "react-native-webview";

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => {
          Alert.alert("Simple Button pressed");
          console.warn("Going to web view page...");
          navigation.navigate("Web AR");
        }}
        title="Web View"
        color="#841584"
        accessibilityLabel="Going to web view page"
      />
    </View>
  );
}

function ARScreen() {
  return (
    <WebView
      source={{uri: "https://reactnative.dev/"}}
      style={{marginBottom: 20, marginTop: 50}}
    />
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: "Overview"}}
          />
          <Stack.Screen name="Web AR" component={ARScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
