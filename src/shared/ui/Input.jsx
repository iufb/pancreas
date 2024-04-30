import { StyleSheet, Text, TextInput, View } from "react-native";

export const Input = ({ label, style, ...props }) => {
  return (
    <View>
      <Text style={customStyles.label}>{label}</Text>
      <TextInput style={[customStyles.input, style]} {...props} />
    </View>
  );
};

const customStyles = StyleSheet.create({
  label: {
    color: "white",
    fontSize: 20,
  },
  input: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 5,
  },
});
