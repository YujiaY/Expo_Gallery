import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import BuiltInARScreen from "./src/pages/ar/built-in-AR-screen";
import ExternalARScreen from "./src/pages/ar/external-AR-screen";
import HomeScreen from "./src/pages/HomeScreen";
import ImageTracking from "./src/pages/ar/8th-wall/image-tracking";
import PacMan from "./src/pages/ar/8th-wall/pac-man";

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
          <Stack.Screen name="Built-in Web AR" component={BuiltInARScreen} />
          <Stack.Screen name="External Web AR" component={ExternalARScreen} />
          <Stack.Screen name="Image Tracking" component={ImageTracking} />
          <Stack.Screen name="PizzaHut PacMan" component={PacMan} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
