/* eslint-disable no-undef */
import { View, StyleSheet, Image, Keyboard } from 'react-native';
import Input, {
  IconNames,
  KeyboardTypes,
  ReturnKeyTypes,
} from '../components/Input';
import SafeInputView from '../components/SafeInputView';
import { useEffect, useRef, useState } from 'react';
import Button from '../components/Button';
import { signIn } from '../api/auth';

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);
  const onSubmit = () => {
    Keyboard.dismiss();
    signIn(email, password)
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    setDisabled(!email || !password);
  }, [email, password]);

  return (
    <SafeInputView>
      <View style={styles.container}>
        <Image source={require('../../assets/main.png')} style={styles.image} />
        <Input
          title="이메일"
          placeholder={'your@email.com'}
          keyboardType={KeyboardTypes.EMAIL}
          returnKeyType={ReturnKeyTypes.NEXT}
          iconName={IconNames.EMAIL}
          value={email}
          onChangeText={(email) => setEmail(email.trim())}
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <Input
          title="비밀번호"
          ref={passwordRef}
          returnKeyType={ReturnKeyTypes.DONE}
          value={password}
          iconName={IconNames.PASSWORD}
          onSubmitEditing={onSubmit}
          onChangeText={(password) => setPassword(password.trim())}
          secureTextEntry
        />
        <View style={styles.buttonContainer}>
          <Button title="Log In" onPress={onSubmit} disabled={disabled} />
        </View>
      </View>
    </SafeInputView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
});
