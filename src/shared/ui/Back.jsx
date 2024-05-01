import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { darkGreenColor } from "../constants/Colors";
import { Icon } from "./Icon";

export const Back = () => {
  return (
    <TouchableOpacity
      style={{
        gap: 4,
        flexDirection: "row",
        alignItems: "center",
        marginRight: 4,
      }}
      onPress={() => router.back()}
    >
      <Icon name={"backward"} color={"black"} size={20} />
      <Text style={{ color: darkGreenColor, fontSize: 20, fontWeight: "bold" }}>
        Назад
      </Text>
    </TouchableOpacity>
  );
};
