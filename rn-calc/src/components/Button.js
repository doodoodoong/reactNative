import { Text } from "react-native";

export default function Button(props) {
  console.log(props);
  return <Text>{props.title}</Text>;
}
