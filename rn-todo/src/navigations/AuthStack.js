import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingInScreen from '../screens/SignInScreen';
import ListScreen from '../screens/ListScreen';
import { PRIMARY, WHITE } from '../colors';
import { Pressable, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import HeaderLeftButton from '../components/HeaderLeftButton';
import HeaderRightButton from '../components/HeaderRightButton';
import SettingScreen from '../screens/SettingScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignIn" component={SingInScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
