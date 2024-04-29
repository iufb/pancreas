import { ActivityIndicator, Pressable, StyleSheet, Text } from "react-native";
import { darkGreenColor, greenColor } from "../constants/Colors";

export const Button = ({
  children,
  disabled,
  className,
  variant = "primary",
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
          ...{
            primary: styles.primary(disabled),
            outlined: styles.outlined(disabled),
          }[variant],
        },
      ]}
      disabled={disabled}
    >
      {loading ? (
        <ActivityIndicator
          size={"small"}
          color={variant == "primary" ? "white" : darkGreenColor}
        />
      ) : (
        <Text
          style={[
            styles.text,
            variant == "primary" ? styles.lightText : styles.darkText,
          ]}
        >
          {children}
        </Text>
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
  primary: (disabled) => ({
    backgroundColor: disabled ? darkGreenColor : greenColor,
  }),
  outlined: (disabled) => ({
    backgroundColor: disabled ? "gray" : "white",
    color: darkGreenColor,
  }),
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
  lightText: { color: "white" },
  darkText: { color: darkGreenColor },
  disabled: {
    opacity: 50,
  },
});
