import { Text, View } from "react-native";
import { lightGreenColor } from "../constants/Colors";
import { Icon } from "./Icon";

export const Tip = ({ children }) => {
  return (
    <View
      style={{
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: lightGreenColor,
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        justifyContent: "space-around",
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
    </View>
  );
};
