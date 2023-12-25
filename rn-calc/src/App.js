import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import Button, { ButtonTypes } from "./components/Button";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [result, setResult] = useState(0);
  const windowWidth = useWindowDimensions().width;
  const width = (windowWidth - 5) / 4;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.resultContainer}>
        <Text style={styles.text}>{result}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.leftPad}>
          <View style={styles.number}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <Button
                key={num}
                title={num.toString()}
                onPress={() => {}}
                buttonStyle={{ width, height: width, marginTop: 1 }}
              />
            ))}
          </View>
          <View style={styles.bottom}>
            <Button
              title="0"
              onPress={() => {}}
              buttonType={ButtonTypes.NUMBER}
              buttonStyle={{ width: width * 2, height: width, marginTop: 1 }}
            />
            <Button
              title="="
              onPress={() => {}}
              buttonType={ButtonTypes.OPERATOR}
              buttonStyle={{ width, height: width, marginTop: 1 }}
            />
          </View>
        </View>

        <View>
          <Button
            title="C"
            buttonType={ButtonTypes.OPERATOR}
            onPress={() => {}}
            buttonStyle={{ width, height: width, marginTop: 1 }}
          />
          <Button
            buttonType={ButtonTypes.OPERATOR}
            title="-"
            onPress={() => {}}
            buttonStyle={{ width, height: width, marginTop: 1 }}
          />
          <Button
            title="+"
            buttonType={ButtonTypes.OPERATOR}
            onPress={() => {}}
            buttonStyle={{ width, height: width * 2, marginTop: 1 }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  leftPad: {
    width: "75%",
  },
  number: {
    flexWrap: "wrap-reverse",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
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
    borderWidth: 1,
  },
  resultContainer: {
    backgroundColor: "#000000",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  buttonContainer: {
    backgroundColor: "#000000",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
