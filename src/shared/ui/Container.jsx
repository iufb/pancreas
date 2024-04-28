import { View } from "react-native";

export const Container = ({ children, style, ...props }) => {
  return (
    <View
      {...props}
      style={[
        {
          flexGrow: 1,
          padding: 10,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};
