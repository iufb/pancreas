import { Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import {
  CreateMedicineNotificationButton,
  MedicineView,
} from "../../components";
import { Back, Container, Content } from "../../shared/ui";
import { getItem } from "../../shared/utils";

export default function Medicine() {
  const [medicines, setMedicines] = useState([]);
  const getSavedMedicines = async () => {
    const data = await getItem("meds");
    console.log(data, "MEDS");
    if (data) {
      setMedicines(data);
    }
  };
  useEffect(() => {
    getSavedMedicines();
  }, []);
  return (
    <Container>
      <Stack.Screen
        options={{
          title: "Уведомления",
          headerBackVisible: false,
          headerLeft: () => <Back />,
        }}
      />

      <Content refresh={getSavedMedicines}>
        {medicines.length > 0 ? (
          medicines.map((m, idx) => (
            <MedicineView
              data={medicines}
              getMeds={getSavedMedicines}
              key={idx}
              medicine={m}
            />
          ))
        ) : (
          <View>
            <Text style={{ fontSize: 22, color: "gray" }}>
              Нет сохраненных лекарств.
            </Text>
          </View>
        )}
      </Content>
      <CreateMedicineNotificationButton getMeds={getSavedMedicines} />
    </Container>
  );
}
