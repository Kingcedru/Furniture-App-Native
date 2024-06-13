import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

export default function ButtonComponent({ text, color, textColor }) {
  return (
    <View>
      <Pressable
        style={{
          backgroundColor: color,
          borderWidth: 2,
          borderColor: "lightgreen",
          display: "flex",
          borderStyle: "solid",
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: textColor,
            fontSize: 15,
            fontWeight: "bold",
            padding: 15,
            display: "flex",
            textAlign: "center",
          }}
        >
          {text}
        </Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {},
});
