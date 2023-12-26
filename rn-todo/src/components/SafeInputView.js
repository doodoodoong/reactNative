/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from 'react-native';

export default function SafeInputView({ children }) {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.select({ ios: 'padding' })}
    >
      <Pressable
        style={{ flex: 1 }}
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        {children}
      </Pressable>
    </KeyboardAvoidingView>
  );
}

SafeInputView.propsTypes = {
  children: PropTypes.node,
};
