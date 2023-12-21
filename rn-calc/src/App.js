import { StatusBar, StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";

export default function App() {
  const isError = false;
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>Calc App</Text>
      <Button title="button" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "700",
    color: "green",
  },
  error: {
    fontSize: 30,
    fontWeight: "700",
    color: "red",
  },
});
