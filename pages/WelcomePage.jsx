import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
} from "react-native";

const { width, height } = Dimensions.get("window");
export default function WelcomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={{ height: height / 1.5, width: width }}
        source={require("../assets/furniture.png")}
      />
      <View style={styles.textButton}>
        <Text style={styles.title}>Enjoy Your Online Shopping</Text>
        <Text style={styles.paragraph}>
          Browser through all categories and shop the best furniture for your
          dream house
        </Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("GetStarted")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  textButton: {
    display: "flex",
    gap: 10,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  paragraph: {
    color: "gray",
  },
  button: {
    backgroundColor: "lightgreen",
    display: "flex",
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    padding: 15,
    display: "flex",
    textAlign: "center",
  },
});
