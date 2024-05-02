import { Link, Stack, router } from "expo-router";
import React from "react";
import { ImageBackground, View } from "react-native";
import { Button, Container, Title } from "../../shared/ui";

export default function Info() {
  return (
    <Container>
      <Stack.Screen
        options={{
          title: "Инфо:",
          headerLeft: () => (
            <Link style={{ marginLeft: 20, fontSize: 18 }} href={"/"}>
              Главная
            </Link>
          ),
        }}
      />
      <ImageBackground
        source={require("../../../assets/images/info.jpg")}
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          maxHeight: "70%",
        }}
        resizeMode="cover"
      >
        <Title
          style={{
            backgroundColor: "white",
            padding: 10,
            borderRadius: 10,
          }}
        >
          Панкреатит
        </Title>
      </ImageBackground>
      <View style={{ gap: 10, marginTop: 10 }}>
        <Button onPress={() => router.push("/info/about")}>
          Понятие о панкреатите
        </Button>
        <Button onPress={() => router.push("/info/resources")}>
          Лекции специалистов
        </Button>
      </View>
    </Container>
  );
}
