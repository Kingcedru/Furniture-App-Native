import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import React from "react";
import ButtonComponent from "../components/ButtonComponent";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/headlogs1.png")}
          style={{
            width: 360,
            height: 150,
          }}
        />
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.form}>
        <View>
          <Text style={styles.label}>Email</Text>
          <View style={{ position: "relative" }}>
            <TextInput
              secureTextEntry={true}
              autoCorrect={false}
              style={styles.textInput}
              placeholder="demo@email.com"
            />
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
                justifyContent: "center",
                position: "absolute",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/icons/email.png")}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: "contain",
                }}
              />
              <Text
                style={{
                  color: "lightgray",
                }}
              >
                |
              </Text>
            </View>
          </View>
        </View>
        <ButtonComponent color="lightgreen" text="Login" textColor="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "space-between",
    position: "relative",
  },
  header: {
    position: "relative",
  },
  title: {
    fontSize: 30,
    position: "absolute",
    top: 50,
    left: 150,
    fontWeight: "bold",
  },
  form: {
    position: "absolute",
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 20,
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    elevation: 50,
  },
  textInput: {
    height: 40,
    borderBottomWidth: 2,
    borderStyle: "solid",
    borderColor: "lightgray",
    color: "black",
    paddingLeft: 50,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});
