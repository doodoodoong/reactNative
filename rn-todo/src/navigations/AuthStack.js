import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingInScreen from '../screens/SignInScreen';
import ListScreen from '../screens/ListScreen';
import { PRIMARY, WHITE } from '../colors';
import { Pressable, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
        headerTitleAlign: 'center',
        headerTintColor: PRIMARY.DEFAULT,
        headerTitleStyle: {
          fontWeight: '700',
        },
        headerLeft: ({ canGoBack, tintColor }) => {
          if (!canGoBack) {
            return null;
          }
          return (
            <MaterialCommunityIcons
              name="chevron-left"
              size={30}
              color={tintColor}
            />
          );
        },
      }}
    >
      <Stack.Screen
        name="SignIn"
        component={SingInScreen}
        options={{
          title: 'Log In',
        }}
      />
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={{
          title: 'TODO List',
          headerTintColor: PRIMARY.DEFAULT,
          headerTitleStyle: {
            fontWeight: '700',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
