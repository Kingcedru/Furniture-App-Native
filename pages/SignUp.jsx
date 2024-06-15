import { View, Text, Image, StyleSheet } from "react-native";

import React from "react";
import ButtonComponent from "../components/ButtonComponent";
import InputField from "../components/InputField";

export default function SignUp({ navigation }) {
  const lock = require("../assets/icons/lock.png");
  const email = require("../assets/icons/email.png");
  const phone = require("../assets/icons/phone.png");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/headlog2.png")}
          style={{
            width: 360,
            height: 110,
          }}
        />
        <Text style={styles.title}>Sign up</Text>
      </View>
      <Image
        source={require("../assets/sitting.png")}
        style={{
          width: 200,
          height: 200,
          resizeMode: "contain",
          position: "absolute",
          top: 100,
          left: 150,
          zIndex: 10,
        }}
      />
      <View style={styles.form}>
        <InputField
          label={"Email"}
          autoCorrect={false}
          secureTextEntry={false}
          placeholder={"demo@email.com"}
          image={email}
        />
        <InputField
          label={"Phone No"}
          autoCorrect={false}
          secureTextEntry={false}
          placeholder={"+91 000-00-000"}
          image={phone}
        />
        <InputField
          label={"Password"}
          autoCorrect={false}
          secureTextEntry={true}
          placeholder={"********"}
          image={lock}
        />
        <InputField
          label={"Confirm Password"}
          autoCorrect={false}
          secureTextEntry={true}
          placeholder={"********"}
          image={lock}
        />

        <ButtonComponent
          color="lightgreen"
          text="Create an Account"
          textColor="white"
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            justifyContent: "center",
            fontSize: 20,
          }}
        >
          <Text>Already have an Account !</Text>
          <Text
            style={{ color: "lightgreen" }}
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </Text>
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
    top: 30,
    left: 150,
    fontWeight: "normal",
    color: "white",
  },
  form: {
    position: "absolute",
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 10,
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    elevation: 50,
  },
});
