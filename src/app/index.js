import { Stack, router } from "expo-router";
import React from "react";
import { Pressable, Text, ImageBackground } from "react-native";
import * as Animatable from "react-native-animatable";
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
      <ImageBackground
        source={require("../../assets/images/bg.jpg")}
        style={{
          width: "100%",
          flex: 1,
          borderRadius: 20,
          alignItems: "center",
          overflow: "hidden",
          justifyContent: "space-around",
        }}
      >
        <Title style={{ fontSize: 40, fontStyle: "italic", color: "white" }}>
          Панкреатит
        </Title>
        <Animatable.Image
          animation="pulse"
          duration={4000}
          iterationCount={"infinite"}
          source={require("../../assets/images/logo.png")}
          style={[{ height: 200, width: 200 }]}
        ></Animatable.Image>
        <Animatable.View animation="zoomInUp" duration={3000}>
          <Pressable
            style={{
              paddingVertical: 20,
              borderWidth: 2,
              borderColor: "white",
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
      </ImageBackground>
    </Container>
  );
}
