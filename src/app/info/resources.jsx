import { Stack } from "expo-router";
import React from "react";
import { Linking, Text, TouchableOpacity, View } from "react-native";
import {
  darkGreenColor,
  greenColor,
  lightGreenColor,
} from "../../shared/constants/Colors";
import { Back, Container, Title } from "../../shared/ui";

export default function Resources() {
  const handleOpenRemoteLink = (link) => {
    Linking.openURL(link);
  };
  return (
    <Container>
      <Stack.Screen
        options={{
          title: "Инфо:",
          headerBackVisible: false,
          headerLeft: () => <Back />,
        }}
      />
      <Title>Лекции:</Title>
      <View style={{ gap: 10 }}>
        {videos.map((v, idx) => (
          <View
            key={idx}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 10,
            }}
          >
            <TouchableOpacity
              key={idx}
              style={{
                backgroundColor:
                  idx == 0 || idx == 1 ? lightGreenColor : "white",
                paddingHorizontal: 10,
                paddingVertical: 6,
                borderRadius: 10,
                width: "80%",
              }}
              onPress={() => handleOpenRemoteLink(v.url)}
            >
              <Text
                style={{
                  color: idx == 0 || idx == 1 ? "white" : darkGreenColor,
                }}
              >
                {idx + 1}.{v.desc}
              </Text>
            </TouchableOpacity>

            <View
              style={{
                backgroundColor: greenColor,
                paddingVertical: 10,
                paddingHorizontal: 8,
                borderRadius: 100,
              }}
            >
              <Text style={{ color: "white" }}>{v.lang}</Text>
            </View>
          </View>
        ))}
      </View>
    </Container>
  );
}
const videos = [
  {
    url: "https://www.youtube.com/watch?v=oBdJ9aY3OgU",
    desc: "Панкреатитпен ауыратын науқастар реабилитациясы",
    lang: "Каз",
  },
  {
    url: "https://www.youtube.com/watch?v=PmesL_2V9LA",
    desc: "Реабилитация больных панкреатитом",
    lang: "Рус",
  },
  {
    url: "https://www.youtube.com/watch?v=ilKEEe7AsmU",
    desc: "Панкреатит емделе ме? І «Теледәрігер»",
    lang: "Каз",
  },
  {
    url: "https://www.youtube.com/watch?v=EumM1443K3A",
    desc: "«Теледәрігер». Панкреатитті емдемесе...",
    lang: "Каз",
  },
  {
    url: "https://www.youtube.com/watch?v=237GaXdPgZs",
    desc: "ҰЙҚЫ БЕЗІ ауруын МЫНА әдіс ЕМДЕЙДІ. ҰЙҚЫ БЕЗІ АУРУЛАРЫҢ БЕЛГІЛЕРІ...",
    lang: "Каз",
  },
  {
    url: "https://www.youtube.com/watch?v=6NOkw9qo6Z0",
    desc: "Программа 'Диагноз' - Жіті панкреонекроз",
    lang: "Каз",
  },
  {
    url: "https://www.youtube.com/watch?v=E5lJYTGR3e8",
    desc: "Хронический и острый панкреатит. Симптомы, причины и лечение.",
    lang: "Рус",
  },
  {
    url: "https://www.youtube.com/watch?v=ImrdJs6s-JI",
    desc: 'Доктор знает! Панкреатит | Телеканал "Открытый мир. Здоровье"',
    lang: "Рус",
  },
  {
    url: "https://www.youtube.com/watch?v=sLsxMfkM_F4",
    desc: "Вы это не перевариваете! Хронический панкреатит",
    lang: "Рус",
  },
];
