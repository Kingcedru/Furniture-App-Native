import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import React from "react";
import ButtonComponent from "../components/ButtonComponent";
import InputField from "../components/InputField";

export default function Login() {
  const lock = require("../assets/icons/lock.png");
  const email = require("../assets/icons/email.png");
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
        <InputField
          label={"password"}
          autoCorrect={false}
          secureTextEntry={false}
          placeholder={"demo@email.com"}
          image={email}
        />
        <InputField
          label={"password"}
          autoCorrect={false}
          secureTextEntry={true}
          placeholder={"********"}
          image={lock}
        />
        <ButtonComponent color="lightgreen" text="Login" textColor="white" />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            justifyContent: "center",
            fontSize: 20,
          }}
        >
          <Text>Don't have an Account ?</Text>
          <Text style={{ color: "lightgreen" }}>Sign up</Text>
        </View>
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
});
