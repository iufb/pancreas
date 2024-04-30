import { Stack } from "expo-router";
import React from "react";
import { Linking, TouchableOpacity, View } from "react-native";
import { lightGreenColor } from "../../shared/constants/Colors";
import { Container, ListItem, Title } from "../../shared/ui";

export default function Anketa() {
  const handleOpenLink = (link) => {
    Linking.openURL(link);
  };
  return (
    <Container>
      <Stack.Screen options={{ title: "Анкета:" }} />
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 10,
          padding: 10,
          flex: 1,
          gap: 10,
        }}
      >
        <Title>
          Тесты для самоконтроля через стандартизированные опросники:{" "}
        </Title>
        <View style={{ gap: 20 }}>
          {onlineTools.map((v, idx) => (
            <TouchableOpacity
              style={{
                backgroundColor: lightGreenColor,
                paddingVertical: 8,
                paddingHorizontal: 12,
                justifyContent: "center",
                borderRadius: 10,
              }}
              key={idx}
              onPress={() => handleOpenYoutube(v.url)}
            >
              <ListItem color="white" content={`${v.desc}`} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Container>
  );
}
const onlineTools = [
  { url: "https://massage-sport.ru/sf_36/", desc: "Онлайн калькулятор КЖ" },
  {
    url: "https://psytests.org/result?v=depA2TP",
    desc: "Онлайн тест -  депрессия Бека",
  },
  {
    url: "https://onlinetestpad.com/ru/test/714-test-issledovanie-trevozhnosti-oprosnik-spilbergera",
    desc: "Тест на тревожность онлайн",
  },
  {
    url: "https://psytests.org/result?v=kltK1RTrJ6",
    desc: "Тест приверженность онлайн",
  },
];
