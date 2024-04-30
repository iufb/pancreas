import { useState } from "react";
import { FlatList, View } from "react-native";
import { darkGreenColor } from "../shared/constants/Colors";
import { Button, Icon, Input, Modal, Title } from "../shared/ui";
import { getCurrentDate } from "../shared/utils";

export const CreateHealthRecordButton = ({ symptom, stats, setStats }) => {
  const [selected, setSelected] = useState("");
  const [showModal, setShowModal] = useState(false);

  const changeStats = (key, value) => {
    setStats({ ...stats, [key]: value });
    setShowModal(false);
  };
  return (
    <>
      <Button
        onPress={() => {
          setSelected(symptom.eng);
          setShowModal(true);
        }}
      >
        <Icon name={"plus"} size={18} color={"white"} />
      </Button>
      <Modal full open={showModal} close={() => setShowModal(false)}>
        <Title style={{ color: "white" }}>{getCurrentDate()}</Title>
        {getContent(selected, changeStats)}
      </Modal>
    </>
  );
};

const Pressure = ({ changeStats }) => {
  const [sis, setSis] = useState("120");
  const [dis, setDis] = useState("80");
  const [pulse, setPulse] = useState("80");

  return (
    <View style={{ gap: 40 }}>
      <Title style={{ color: "white" }}>Давление и пульс:</Title>
      <Input label="Систолическое давление" value={sis} onChangeText={setSis} />
      <Input
        keyboardType="numeric"
        label="Диaстолическое давление"
        value={dis}
        onChangeText={setDis}
      />
      <Input label="Пульс" value={pulse} onChangeText={setPulse} />

      <Button
        icon="plus"
        variant="outlined"
        onPress={() =>
          changeStats("bloodPressure", {
            systolic: +sis,
            diastolic: +dis,
            pulse: +pulse,
          })
        }
      >
        Отметить
      </Button>
    </View>
  );
};
const Nausea = ({ changeStats }) => {
  const [value, setValue] = useState("no");

  return (
    <View style={{ gap: 40 }}>
      <Title style={{ color: "white" }}>Ecть ли тошнота после еды?</Title>

      <View style={{ flexDirection: "row", justifyContent: "center", gap: 10 }}>
        {["yes", "no"].map((v) => (
          <Button
            key={v}
            variant="select"
            color={v == value ? darkGreenColor : "white"}
            onPress={() => setValue(v)}
          >
            {v == "yes" ? "Да" : "Нет"}
          </Button>
        ))}
      </View>
      <Button
        icon="plus"
        variant="outlined"
        onPress={() => changeStats("nausea", value == "yes")}
      >
        Отметить
      </Button>
    </View>
  );
};
const AbdominalBloating = ({ changeStats }) => {
  const [value, setValue] = useState("no");

  return (
    <View style={{ gap: 40 }}>
      <Title style={{ color: "white" }}>Ecть ли вздутие?</Title>

      <View style={{ flexDirection: "row", justifyContent: "center", gap: 10 }}>
        {["yes", "no"].map((v) => (
          <Button
            key={v}
            variant="select"
            color={v == value ? darkGreenColor : "white"}
            onPress={() => setValue(v)}
          >
            {v == "yes" ? "Да" : "Нет"}
          </Button>
        ))}
      </View>
      <Button
        icon="plus"
        variant="outlined"
        onPress={() => changeStats("abdominalBloating", value == "yes")}
      >
        Отметить
      </Button>
    </View>
  );
};
const Stool = ({ changeStats }) => {
  const [value, setValue] = useState("no");

  return (
    <View style={{ gap: 40 }}>
      <Title style={{ color: "white" }}>Регулярный стул после еды?</Title>
      <View style={{ flexDirection: "row", justifyContent: "center", gap: 10 }}>
        {["yes", "no"].map((v) => (
          <Button
            key={v}
            variant="select"
            color={v == value ? darkGreenColor : "white"}
            onPress={() => setValue(v)}
          >
            {v == "yes" ? "Регуляный" : "Не регуляный"}
          </Button>
        ))}
      </View>
      <Button
        icon="plus"
        variant="outlined"
        onPress={() =>
          changeStats("stool", value == "yes" ? "Регуляный" : "Не регуляный")
        }
      >
        Отметить
      </Button>
    </View>
  );
};

const Vomit = ({ changeStats }) => {
  const [value, setValue] = useState("no");

  return (
    <View style={{ gap: 40 }}>
      <Title style={{ color: "white" }}>Ecть ли рвота после еды?</Title>
      <View style={{ flexDirection: "row", justifyContent: "center", gap: 10 }}>
        {["yes", "no"].map((v) => (
          <Button
            key={v}
            variant="select"
            color={v == value ? darkGreenColor : "white"}
            onPress={() => setValue(v)}
          >
            {v == "yes" ? "Да" : "Нет"}
          </Button>
        ))}
      </View>
      <Button
        icon="plus"
        variant="outlined"
        onPress={() => changeStats("vomiting", value == "yes")}
      >
        Отметить
      </Button>
    </View>
  );
};
const Pain = ({ changeStats }) => {
  const [value, setValue] = useState("1");

  return (
    <View style={{ gap: 40 }}>
      <Title style={{ color: "white" }}>
        Интенсивность болевого приступа по шкале от 1 до 10
      </Title>
      <FlatList
        horizontal
        data={painNumbers}
        contentContainerStyle={{ gap: 10, padding: 20 }}
        renderItem={({ item }) => (
          <Button
            variant="select"
            color={item.label === value ? darkGreenColor : "white"}
            onPress={() => {
              setValue(item.value);
              console.log("Selected pain", item.value);
            }}
          >
            {item.label}
          </Button>
        )}
        keyExtractor={(item) => item.value}
      />
      <Button
        icon="plus"
        variant="outlined"
        onPress={() => changeStats("painIntensity", value)}
      >
        Отметить
      </Button>
    </View>
  );
};
const getContent = (value, changeStats) => {
  switch (value) {
    case "painIntensity":
      return <Pain changeStats={changeStats} />;
    case "vomiting":
      return <Vomit changeStats={changeStats} />;
    case "nausea":
      return <Nausea changeStats={changeStats} />;
    case "abdominalBloating":
      return <AbdominalBloating changeStats={changeStats} />;
    case "stool":
      return <Stool changeStats={changeStats} />;
    case "bloodPressure":
      return <Pressure changeStats={changeStats} />;
  }
};
const painNumbers = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "10", label: "10" },
];
