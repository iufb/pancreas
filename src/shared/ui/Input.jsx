import { StyleSheet, TextInput } from "react-native";

export const Input = ({ style, ...props }) => {
  return <TextInput style={[customStyles.input, style]} {...props} />;
};

const customStyles = StyleSheet.create({
  input: {},
});
