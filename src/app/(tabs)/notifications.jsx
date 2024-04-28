import { Stack, router } from "expo-router";
import React from "react";
import { Image, View } from "react-native";
import { Button, Container, Tip } from "../../shared/ui";

export default function Notifications() {
  return (
    <Container style={{ justifyContent: "center", gap: 20 }}>
      <Stack.Screen options={{ title: "Уведомления:" }} />
      <Image
        source={require("../../../assets/images/not.jpg")}
        style={{
          width: "100%",
          height: "60%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 20,
        }}
        resizeMode="cover"
      />

      <View style={{ gap: 10, marginTop: 10 }}>
        <Button onPress={() => router.push("/notifications/medicine")}>
          Лекарства
        </Button>
        <Button onPress={() => router.push("/notifications/meals")}>
          Приемы пищи
        </Button>
      </View>
      <Tip>
        Здесь Вы можете установить напоминания для четкого соблюдения всех
        указаний врача.
      </Tip>
    </Container>
  );
}
