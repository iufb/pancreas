import { Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { CreateMedicineNotificationButton } from "../../components";
import { Container, Content } from "../../shared/ui";
import { getItem } from "../../shared/utils";

export default function Medicine() {
  const [medicines, setMedicines] = useState([]);
  useEffect(() => {
    const getSavedMedicines = async () => {
      const data = await getItem("medicines");
      if (data) {
        setMedicines(data);
      }
    };
    getSavedMedicines();
  }, []);
  return (
    <Container>
      <Stack.Screen options={{ title: "Уведомления: приемы лекарств" }} />

      <Content>
        {medicines.length > 0 ? (
          medicines.map((m) => (
            <View>
              <Text>{m.name}</Text>
            </View>
          ))
        ) : (
          <View>
            <Text style={{ fontSize: 22, color: "gray" }}>
              Нет сохраненных лекарств.
            </Text>
          </View>
        )}
      </Content>
      <CreateMedicineNotificationButton />
    </Container>
  );
}
