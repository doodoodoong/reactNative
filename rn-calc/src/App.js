import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import Button, { ButtonTypes } from "./components/Button";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

const Operator = {
  CLEAR: "C",
  PLUS: "+",
  MINUS: "-",
  EQUAL: "=",
};

export default function App() {
  const [result, setResult] = useState(0);
  const [formula, setFormula] = useState([]);
  const windowWidth = useWindowDimensions().width;
  const width = (windowWidth - 5) / 4;
  const onPressOperator = (operator) => {
    switch (operator) {
      case Operator.CLEAR:
        setFormula([]);
        setResult(0);
        return;
      case Operator.EQUAL:
        const last = formula[formula.length - 1];
        if ([Operator.PLUS, Operator.MINUS].includes(last)) {
          setFormula((prev) => {
            prev.pop();
            return [...prev, operator];
          });
        } else {
          setFormula((prev) => [...prev, operator]);
        }
        return;
    }
  };
  const onPressNumber = (number) => {
    const last = formula[formula.length - 1];
    if (isNaN(last)) {
      setResult(number);
      setFormula((prev) => [...prev, number]);
    } else {
      const newNumber = (last ?? 0) * 10 + number;
      setResult(newNumber);
      setFormula((prev) => {
        prev.pop();
        return [...prev, newNumber];
      });
    }
    setResult((prev) => prev * 10 + number);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.resultContainer}>
        <Text style={styles.text}>
          {result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.leftPad}>
          <View style={styles.number}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <Button
                key={num}
                title={num.toString()}
                onPress={() => onPressNumber(num)}
                buttonStyle={{ width, height: width, marginTop: 1 }}
              />
            ))}
          </View>
          <View style={styles.bottom}>
            <Button
              title="0"
              onPress={() => {
                onPressNumber(0);
              }}
              buttonType={ButtonTypes.NUMBER}
              buttonStyle={{ width: width * 2, height: width, marginTop: 1 }}
            />
            <Button
              title={Operator.EQUAL}
              onPress={() => {
                onPressOperator(Operator.EQUAL);
              }}
              buttonType={ButtonTypes.OPERATOR}
              buttonStyle={{ width, height: width, marginTop: 1 }}
            />
          </View>
        </View>

        <View>
          <Button
            title={Operator.CLEAR}
            buttonType={ButtonTypes.OPERATOR}
            onPress={() => {
              onPressOperator(Operator.CLEAR);
            }}
            buttonStyle={{ width, height: width, marginTop: 1 }}
          />
          <Button
            buttonType={ButtonTypes.OPERATOR}
            title={Operator.MINUS}
            onPress={() => {
              onPressOperator(Operator.MINUS);
            }}
            buttonStyle={{ width, height: width, marginTop: 1 }}
          />
          <Button
            title={Operator.PLUS}
            buttonType={ButtonTypes.OPERATOR}
            onPress={() => {
              onPressOperator(Operator.PLUS);
            }}
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
