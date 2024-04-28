import { Stack } from "expo-router";
import React from "react";
import { ScrollView } from "react-native";
import { Meal } from "../../components";
import { Container, Tip } from "../../shared/ui";

export default function Meals() {
  return (
    <Container>
      <Stack.Screen options={{ title: "Уведомления: приемы пищи" }} />
      <Tip>Интервал между приемами пищи минимум 3 часа.</Tip>
      <ScrollView
        contentContainerStyle={{
          gap: 10,
          marginTop: 10,
          paddingHorizontal: 10,
          flex: 1,
        }}
      >
        {mealsArr.map((meal, idx) => (
          <Meal key={idx} meal={meal} />
        ))}
      </ScrollView>
    </Container>
  );
}

const mealsArr = [
  { value: "breakfast", label: "Завтрак" },
  { value: "snack1", label: "Перекус №1" },
  { value: "lunch", label: "Обед" },
  { value: "snack2", label: "Перекус №2" },
  { value: "dinner", label: "Ужин" },
  { value: "snack3", label: "Перекус №3 " },
];