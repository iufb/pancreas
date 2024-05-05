import { Stack, router } from "expo-router";
import React, { useEffect } from "react";
import { Image, View } from "react-native";
import { Button, Container, Tip } from "../../shared/ui";
import {
  askNotificationsPermission,
  isNotificationsPermissionsGranted,
} from "../../shared/utils";

export default function Notifications() {
  useEffect(() => {
    isNotificationsPermissionsGranted().then((status) => {
      console.log(status);
      if (status !== "granted") {
        alert("Включите уведомления чтобы создавать напоминания");
      }
    });
  }, []);
  const handleTurnOnPermission = async () => {
    const status = await askNotificationsPermission();
    setPermission(status == "granted");
  };
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
      {/* {!permission && (
        <Tip
          color="#FF7276"
          button={
            <TouchableOpacity
              onPress={handleTurnOnPermission}
              style={{ padding: 5, backgroundColor: "white", borderRadius: 10 }}
            >
              <Text>Вкл</Text>
            </TouchableOpacity>
          }
        >
          Включите уведомления, чтобы получать напоминания.
        </Tip>
      )} */}
    </Container>
  );
}
