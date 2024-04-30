import { StyleSheet, Text, View } from "react-native";
import { darkGreenColor, greenColor } from "../constants/Colors";

export const Title = ({ children, style, ...props }) => {
  return (
    <Text style={[styles.title, style]} {...props}>
      {children}
    </Text>
  );
};
export const Subtitle = ({ children, style }) => (
  <Text style={[styles.subtitle, style]}>{children}</Text>
);
export const ListItem = ({ content, color }) => {
  return (
    <View style={styles.listItem}>
      <Text style={[styles.bullet, { color }]}>&#8226;</Text>
      <Text style={{ color }}>{content}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: greenColor,
  },
  subtitle: { fontSize: 20, fontWeight: "bold", color: darkGreenColor },
  listItem: {
    paddingLeft: 5,
    marginBottom: 5,
    flexDirection: "row", // To align bullet point and text horizontally
    alignItems: "center", // To center items vertically
  },
  bullet: {
    fontSize: 20,
    marginRight: 5,
  },
});
