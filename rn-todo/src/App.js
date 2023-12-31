import { StatusBar } from 'expo-status-bar';
import SingInScreen from './screens/SignInScreen';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigations/AuthStack';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <AuthStack />
    </NavigationContainer>
  );
};

export default App;
