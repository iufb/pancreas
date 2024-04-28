import { Stack, router } from "expo-router";
import React from "react";
import { ImageBackground, View } from "react-native";
import { darkGreenColor, greenColor } from "../../shared/constants/Colors";
import { Button, Container, Title } from "../../shared/ui";

export default function Diet() {
  return (
    <Container>
      <Stack.Screen options={{ title: "Диета:" }} />
      <ImageBackground
        source={require("../../../assets/images/diet.jpg")}
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
          flex: 1,
          maxHeight: "70%",
          borderRadius: 10,
        }}
        resizeMode="cover"
      >
        <Title
          style={{
            backgroundColor: darkGreenColor,
            color: "white",
            borderWidth: 1,
            borderColor: greenColor,
            padding: 10,
            borderRadius: 10,
          }}
        >
          Диетa
        </Title>
      </ImageBackground>
      <View style={{ gap: 10, marginTop: 10 }}>
        <Button onPress={() => router.push("/diet/about")}>
          Понятие о диете
        </Button>
        <Button onPress={() => router.push("/diet/resources")}>
          Лекции специалистов
        </Button>
      </View>
    </Container>
  );
}
