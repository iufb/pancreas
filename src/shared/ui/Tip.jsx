import { Text, View } from "react-native";
import { lightGreenColor } from "../constants/Colors";
import { Icon } from "./Icon";

export const Tip = ({ children, color, button }) => {
  return (
    <View
      style={{
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: color ? color : lightGreenColor,
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        gap: 30,
      }}
    >
      <Icon color="white" name={"info"} size={20} />
      <Text
        style={{
          color: "white",
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
