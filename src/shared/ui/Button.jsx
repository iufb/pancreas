import { ActivityIndicator, Pressable, StyleSheet, Text } from "react-native";
import { darkGreenColor, greenColor } from "../constants/Colors";

export const Button = ({
  children,
  disabled,
  className,
  loading,
  ...pressableProps
}) => {
  return (
    <Pressable
      {...pressableProps}
      style={[
        className,
        {
          ...styles.container,
          backgroundColor: disabled ? darkGreenColor : greenColor,
        },
      ]}
      disabled={disabled}
    >
      {loading ? (
        <ActivityIndicator size={"small"} color={"white"} />
      ) : (
        <Text style={styles.text}>{children}</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  disabled: {
    opacity: 50,
  },
});
