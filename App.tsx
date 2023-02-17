import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import BuiltInARScreen from "./src/pages/ar/built-in-AR-screen";
import ExternalARScreen from "./src/pages/ar/external-AR-screen";
import HomeScreen from "./src/pages/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: "Home"}}
          />
          <Stack.Screen name="External Web AR" component={ExternalARScreen} />
          <Stack.Screen name="Built-in Web AR" component={BuiltInARScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
