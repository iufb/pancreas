import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function Health() {
  return (
    <View>
      <Stack.Screen options={{ title: "Здоровье:" }} />
      <Text>Health</Text>
    </View>
  );
}
