import { ActivityIndicator, Pressable, StyleSheet, Text } from "react-native";
import {
  darkGreenColor,
  greenColor,
  lightGreenColor,
} from "../constants/Colors";

export const Button = ({
  children,
  disabled,
  color,
  className,
  variant = "primary",
  loading,
  position,
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
            float: styles.float(position),
            select: styles.select(color),
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
            variant == "select" && {
              color: color == darkGreenColor ? "white" : darkGreenColor,
            },
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
  float: (position) => ({
    backgroundColor: lightGreenColor,
    position: "absolute",
    ...position,
  }),
  select: (color) => ({
    backgroundColor: color,
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
