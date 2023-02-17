import React from "react";
import {Button, Text, View} from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => {
          console.warn("Going to web view page...");
          navigation.navigate("External Web AR");
        }}
        title="External Web View"
        color="#841584"
        accessibilityLabel="Going to External web view page"
      />

      <Button
        onPress={() => {
          console.warn("Going to Built-in web view page...");
          navigation.navigate("Built-in Web AR");
        }}
        title="Built-in Web View"
        color="blue"
        accessibilityLabel="Going to web view page"
      />
    </View>
  );
};

export default HomeScreen;
