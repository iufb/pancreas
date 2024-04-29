import { Link, Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <Text>Home</Text>
      <Link
        style={{ fontSize: 25, alignSelf: "center", marginTop: 50 }}
        href={"(tabs)/info"}
      >
        Info
      </Link>
    </View>
  );
}
