import { Stack } from "expo-router";
import React from "react";
import { Linking, Text, TouchableOpacity, View } from "react-native";
import { darkGreenColor, greenColor } from "../../shared/constants/Colors";
import { Back, Container, Title } from "../../shared/ui";

export default function Resources() {
  const handleOpenRemoteLink = (link) => {
    Linking.openURL(link);
  };
  return (
    <Container>
      <Stack.Screen
        options={{
          title: "Диета",
          headerBackVisible: false,
          headerLeft: () => <Back />,
        }}
      />
      <Title>Лекции:</Title>
      <View style={{ gap: 10 }}>
        {youtubeLinks.map((v, idx) => (
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
                backgroundColor: "white",
                paddingHorizontal: 10,
                paddingVertical: 6,
                borderRadius: 10,
                width: "80%",
              }}
              onPress={() => handleOpenRemoteLink(v.url)}
            >
              <Text
                style={{
                  color: darkGreenColor,
                }}
              >
                {idx + 1}.{v.desc}
              </Text>
            </TouchableOpacity>

            <View
              style={{
                backgroundColor: greenColor,
                paddingVertical: 10,
                paddingHorizontal: 10,
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
const youtubeLinks = [
  {
    url: "https://www.youtube.com/watch?v=3W04nEg9Ux4",
    desc: "№5 диета. Емдік диета. Түскі ас. Қазақша рецепт.",
    lang: "Каз",
  },
  {
    url: "https://www.youtube.com/watch?v=ilKEEe7AsmU&t=49s",
    desc: "Панкреатит емделе ме? І «Теледәрігер»",
    lang: "Каз",
  },
  {
    url: "https://www.youtube.com/watch?v=5F_yHiXIdR8",
    desc: "Ұйқы безі қабынуы, панкреатиттегі бір күнгі ас мәзірім. Диеталық тағамдар",
    lang: "Каз",
  },
  {
    url: "https://www.youtube.com/watch?v=Xn5tlHQwXz0",
    desc: "Diet for the digestive system. Basic principles. Permitted and prohibited products.",
    lang: "Англ",
  },
  {
    url: "https://www.youtube.com/watch?v=Cim7EX1I06o",
    desc: "ДИЕТА СТОЛ №5. Вкусное и простое МЕНЮ НА КАЖДЫЙ ДЕНЬ!",
    lang: "Рус",
  },
  {
    url: "https://www.youtube.com/watch?v=TrQ3dyH0KHE",
    desc: "'Школа ХХ и ХП' Питание при холецистите и панкреатите (22.12.20)",
    lang: "Рус",
  },
  {
    url: "https://www.youtube.com/watch?v=hISFGPGAP3c",
    desc: "День № 1. Стол 5, диета. Меню на каждый день. Рецепты блюд.",
    lang: "Рус",
  },
];
