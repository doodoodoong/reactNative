import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SingInScreen from './screens/SignInScreen';
import { WHITE } from './colors';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <SingInScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
});

export default App;
