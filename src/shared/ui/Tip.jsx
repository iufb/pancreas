import { Text, View, useWindowDimensions } from "react-native";
import { lightGreenColor } from "../constants/Colors";
import { Icon } from "./Icon";

export const Tip = ({ style, children, color, button }) => {
  const { fontScale } = useWindowDimensions();
  return (
    <View
      style={[
        {
          borderRadius: 20,
          paddingVertical: 10,
          paddingHorizontal: 12,
          backgroundColor: color ? color : lightGreenColor,
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          gap: 30,
        },
        style,
      ]}
    >
      <Icon color="white" name={"info"} size={20} />
      <Text
        style={{
          color: "white",
          fontSize: 18 / fontScale,
          maxWidth: "80%",
          marginLeft: -10,
        }}
      >
        {children}
      </Text>
      {button}
    </View>
  );
};
