import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function Anketa() {
  return (
    <View>
      <Stack.Screen options={{ title: "Анкета:" }} />
      <Text>Anketa</Text>
    </View>
  );
}
