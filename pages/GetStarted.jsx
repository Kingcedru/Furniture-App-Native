import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import ButtonComponent from "../components/ButtonComponent";

export default function GetStarted() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/boysandgirls.png")}
        style={styles.image}
      />
      <View style={styles.text}>
        <Text style={styles.title}>Welcome to AppName</Text>
        <Text style={styles.paragraph}>
          Browser through all categories and shop the best furniture for your
          dream house
        </Text>
      </View>
      <View style={styles.buttons}>
        <ButtonComponent
          text="Create an Account"
          color="lightgreen"
          textColor="white"
        />
        <ButtonComponent text="Login" color="white" textColor="lightgreen" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: "white",
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  paragraph: {
    color: "gray",
    textAlign: "center",
  },
  text: {
    display: "flex",
    gap: 10,
    paddingHorizontal: 23,
    marginVertical: 30,
  },
  buttons: {
    display: "flex",
    gap: 20,
  },
});
