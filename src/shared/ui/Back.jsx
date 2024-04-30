import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { darkGreenColor } from "../constants/Colors";
import { Icon } from "./Icon";

export const Back = () => {
  return (
    <TouchableOpacity
      style={{ gap: 2, flexDirection: "row", alignItems: "center" }}
      onPress={() => router.back()}
    >
      <Icon name={"backward"} color={"black"} size={20} />
      <Text style={{ color: darkGreenColor, fontSize: 20, fontWeight: "bold" }}>
        Назад
      </Text>
    </TouchableOpacity>
  );
};
