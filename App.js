import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import WelcomePage from "./components/WelcomePage";

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomePage />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
