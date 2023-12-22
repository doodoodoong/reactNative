import { StatusBar, StyleSheet, Text, View } from "react-native";
import Button, { ButtonTypes } from "./components/Button";

export default function App() {
  let result = 0;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>{result}</Text>
      <Button
        title="+"
        onPress={() => {
          result = result + 1;
          console.log("+ : ", result);
        }}
        buttonStyle={{ width: 100, height: 200 }}
        buttonType={ButtonTypes.OPERATOR}
      />
      <View style={{ paddingVertical: 10 }}></View>
      <Button
        title="-"
        onPress={() => {
          result = result - 1;
          console.log("- : ", result);
        }}
        buttonStyle={styles.button}
        buttonType={ButtonTypes.OPERATOR}
      />
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
  },
  button: {
    width: 100,
    height: 100,
  },
});
