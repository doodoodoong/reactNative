import { StatusBar, StyleSheet, Text, View } from "react-native";
import Button, { ButtonTypes } from "./components/Button";
import { useState } from "react";

export default function App() {
  const [result, setResult] = useState(0);
  console.log("rendering : ", result);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.resultContainer}>
        <Text style={styles.text}>{result}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Text>Button</Text>
      </View>
      <View style={{ flex: 2, backgroundColor: "#e3e3e3" }}>
        <Text>component</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    flexDirection: "column",
  },
  text: {
    fontSize: 60,
    fontWeight: "700",
    color: "#ffffff",
    paddingBottom: 30,
    paddingRight: 30,
  },
  button: {
    width: 100,
    height: 100,
  },
  resultContainer: {
    backgroundColor: "#000000",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  buttonContainer: {
    backgroundColor: "#A5B4FC",
    flex: 1,
  },
});
