import {
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from "react-native";

export const Input = ({ label, style, ...props }) => {
  const { fontScale } = useWindowDimensions();
  return (
    <View>
      <Text style={customStyles.label(fontScale)}>{label}</Text>
      <TextInput style={[customStyles.input(fontScale), style]} {...props} />
    </View>
  );
};

const customStyles = StyleSheet.create({
  label: (scale) => ({
    color: "white",
    fontSize: 20 / scale,
  }),
  input: (scale) => ({
    fontSize: 20 / scale,
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 5,
  }),
});
