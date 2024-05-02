import { Stack, router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { greenColor } from "../shared/constants/Colors";
import { Container, Title } from "../shared/ui";

export default function Home() {
  return (
    <Container>
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Главная",
          headerBackVisible: false,
        }}
      />
      <View
        style={{
          width: "100%",
          height: "90%",
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "space-around",
          paddingTop: 20,
          backgroundColor: "white",
        }}
      >
        <Title style={{}}>Здесь название</Title>
        <Animatable.Image
          animation="rotate"
          duration={4000}
          iterationCount={"infinite"}
          source={require("../../assets/images/logo.png")}
          style={[{ height: 200, width: 200 }]}
        ></Animatable.Image>
        <Animatable.View animation="zoomInUp" duration={3000}>
          <Pressable
            style={{
              backgroundColor: greenColor,
              paddingVertical: 20,
              paddingHorizontal: 40,
              borderRadius: 10,
            }}
            onPress={() => router.push("(tabs)/info")}
          >
            <Text
              style={{
                fontSize: 40,
                color: "white",
              }}
            >
              Начать
            </Text>
          </Pressable>
        </Animatable.View>
      </View>
    </Container>
  );
}
