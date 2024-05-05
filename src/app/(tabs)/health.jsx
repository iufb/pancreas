import { Link, Stack } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { CreateHealthRecordButton } from "../../components";
import { useToast } from "../../shared/providers";
import { Button, Container, Content, Modal, Tip, Title } from "../../shared/ui";
import { getCurrentDate, getItem, setItem } from "../../shared/utils";

export default function Health() {
  const [showRes, setShowRes] = useState(false);
  const { sendToast } = useToast();
  const [stats, setStats] = useState({
    date: getCurrentDate(),
    painIntensity: 6,
    vomiting: false,
    nausea: true,
    abdominalBloating: false,
    stool: "регулярно",
    bloodPressure: { systolic: 130, diastolic: 85, pulse: 75 },
  });

  const { fontScale } = useWindowDimensions();
  console.log(fontScale);

  return (
    <Container>
      <Stack.Screen options={{ title: "Здоровье:" }} />
      <Content>
        <Tip>
          Здесь Вы можете отметить Ваше состояние по категориям, указанными
          ниже.
        </Tip>
        <Title style={{ color: "black" }}>{getCurrentDate()}</Title>
        {symptoms.map((s, idx) => (
          <View key={s.eng}>
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 25 / fontScale, fontWeight: "bold" }}>
                {idx + 1}.{s.ru}
              </Text>
              <CreateHealthRecordButton
                stats={stats}
                setStats={setStats}
                symptom={s}
              />
            </View>
          </View>
        ))}
        <Button variant="primary" onPress={() => setShowRes(true)}>
          Добавить отчет
        </Button>
        <Link
          href={"/health/stats"}
          style={{ marginTop: 30, fontSize: 22, fontWeight: "bold" }}
        >
          Статистика
        </Link>
      </Content>
      <Modal
        open={showRes}
        close={() => setShowRes(false)}
        full
        visible={showRes}
        onDismiss={() => setShowRes(false)}
      >
        <Title style={{ color: "white" }}>{getCurrentDate()}</Title>
        <Text style={styles.stat}>
          {symptoms[0].ru}: {stats.painIntensity}
        </Text>
        <Text style={styles.stat}>
          {symptoms[1].ru}:{stats.vomiting ? "ecть" : "нет"}
        </Text>
        <Text style={styles.stat}>
          {symptoms[2].ru}:{stats.nausea ? "ecть" : "нет"}
        </Text>
        <Text style={styles.stat}>
          {symptoms[3].ru}:{stats.abdominalBloating ? "ecть" : "нет"}
        </Text>
        <Text style={styles.stat}>
          {symptoms[4].ru}:{stats.stool}
        </Text>
        <Text style={styles.stat}>
          {symptoms[5].ru}:{stats.bloodPressure.systolic} -{" "}
          {stats.bloodPressure.diastolic} , {stats.bloodPressure.pulse}
        </Text>
        <Button
          style={{ marginTop: 10 }}
          variant="outlined"
          onPress={async () => {
            saveStats({ ...stats, date: getCurrentDate() }).then(() => {
              setShowRes(false);
              sendToast("Запись сохранена");
            });
          }}
        >
          Добавить
        </Button>
      </Modal>
    </Container>
  );
}
const styles = StyleSheet.create({
  stat: {
    color: "white",
    fontSize: 24,
  },
});
const saveStats = async (stats) => {
  let health = await getItem("health");
  console.log(health, "save");
  if (health) {
    let found = false;

    // Check if there are existing stats for the same date
    health = health.map((h) => {
      if (h.date === stats.date) {
        found = true;
        return stats; // Replace existing stats with new stats for the same date
      }
      return h;
    });

    // If no existing stats found for the same date, add the new stats
    if (!found) {
      health.push(stats);
    }
    await setItem("health", health);
  } else {
    // Save the updated health data to storage
    await setItem("health", [stats]);
  }
};
const symptoms = [
  { eng: "painIntensity", ru: "Боль" },
  { eng: "vomiting", ru: "Рвота" },
  { eng: "nausea", ru: "Тошнота" },
  { eng: "abdominalBloating", ru: "Вздутие живота" },
  { eng: "stool", ru: "Стул после еды" },
  { eng: "bloodPressure", ru: "Давление и пульс" },
];
