import { View, Text } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

export default function Home() {
  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <Text>Home</Text>
      <Link style={{ fontSize: 25 }} href={"(tabs)/info"}>
        Info
      </Link>
    </View>
  );
}
