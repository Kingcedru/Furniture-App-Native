import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import React from "react";

export default function InputField({
  label,
  placeholder,
  secureTextEntry,
  image,
  autoCorrect,
}) {
  return (
    <View>
      <View>
        <Text style={styles.label}>{label}</Text>
        <View style={{ position: "relative" }}>
          <TextInput
            secureTextEntry={secureTextEntry}
            autoCorrect={autoCorrect}
            style={styles.textInput}
            placeholder={placeholder}
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
            {image && (
              <Image
                source={image}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: "contain",
                }}
              />
            )}
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
