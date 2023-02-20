import React from "react";
import {StyleSheet, Button, Text, View} from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.viewStyle}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => {
          console.warn("Going to Built-in web view page...");
          navigation.navigate("Built-in Web AR");
        }}
        title="Built-in Web View"
        color="blue"
        accessibilityLabel="Going to web view page"
      />
      <Button
        onPress={() => {
          console.warn("Going to web view page...");
          navigation.navigate("External Web AR");
        }}
        title="External pure HTML with A-frame"
        color="#841584"
        accessibilityLabel="Going to External web view page"
      />
      <Button
        onPress={() => {
          navigation.navigate("Image Tracking");
        }}
        title="Image Tracking(With 8th Wall)"
        color="purple"
        accessibilityLabel="Going to 8th Wall Image Tracking"
      />
      <Button
        onPress={() => {
          navigation.navigate("PizzaHut PacMan");
        }}
        title="PizzaHut PacMan(With 8th Wall)"
        color="purple"
        accessibilityLabel="Going to 8th Wall PacMan"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: 12,
  },
});

export default HomeScreen;
