import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { darkGreenColor } from "../shared/constants/Colors";
import { useToast } from "../shared/providers";
import { Button, Input, Modal, Subtitle } from "../shared/ui";
import {
  formatTime,
  getItem,
  sendSchedulePushNotification,
  setItem,
} from "../shared/utils";

export const CreateMedicineNotificationButton = ({ getMeds }) => {
  const [data, setData] = useState({});
  const [step, setStep] = useState(1);
  const { sendToast } = useToast();
  const [show, setShow] = useState(false);
  const handleSubmit = async () => {
    if (step == 3) {
      const firstNotId = await sendSchedulePushNotification({
        content: {
          title: "Примите лекарство",
          body: `${data.name} - ${data.count} шт.`,
          data: { url: "/notifications/medicine" },
        },
        hour: data.first.getHours(),
        minute: data.first.getMinutes(),
      });
      let secondNotId;
      if (data.second) {
        secondNotId = await sendSchedulePushNotification({
          content: {
            title: "Примите лекарство",
            body: `${data.name} - ${data.count} шт.`,
            data: { url: "/notifications/medicine" },
          },
          hour: data.second.getHours(),
          minute: data.second.getMinutes(),
        });
      }
      let meds = await getItem("meds");
      if (!meds) {
        meds = [{ ...data, nots: [firstNotId, secondNotId] }];
      } else {
        meds.push({ ...data, nots: [firstNotId, secondNotId] });
      }
      setItem("meds", meds).then(() => {
        sendToast("Напоминание про " + data.name + " создано!");
        setShow(false);
        getMeds();
        setData({});
      });
    } else {
      setStep(step + 1);
    }
  };

  return (
    <>
      <Button
        onPress={() => setShow(true)}
        variant="float"
        position={{ bottom: 80, right: 20 }}
      >
        Добавить
      </Button>
      <Modal
        open={show}
        close={() => {
          setShow(false);
          setStep(1);
          setData({});
        }}
      >
        <View style={{ height: "70%" }}>{showStep(step, data, setData)}</View>
        <View
          style={{
            height: 4,
            backgroundColor: "gray",
            borderRadius: 10,
          }}
        >
          <View
            style={{
              height: 4,
              backgroundColor: "white",
              width: `${33.3 * step}%`,
              borderRadius: 10,
            }}
          ></View>
        </View>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <Button
            onPress={() => setStep(step - 1)}
            disabled={step == 1}
            className={{ flex: 1 }}
            variant="outlined"
          >
            Назад
          </Button>
          <Button
            className={{ flex: 1 }}
            variant="outlined"
            onPress={handleSubmit}
          >
            {step == 3 ? "Сохранить" : "Далее"}
          </Button>
        </View>
      </Modal>
    </>
  );
};

const showStep = (step, data, setData) => {
  switch (step) {
    case 1:
      return <FirstStep data={data} setData={setData} />;
    case 2:
      return <SecondStep data={data} setData={setData} />;
    case 3:
      return <ThirdStep data={data} setData={setData} />;

    default:
      return <></>;
  }
};
// pills name, pills count
const FirstStep = ({ data, setData }) => {
  return (
    <View>
      <Input
        value={data.name}
        required
        onChangeText={(e) => setData({ ...data, name: e })}
        label={"Название лекарства:"}
      />
      <Input
        required
        value={data.count}
        onChangeText={(e) => setData({ ...data, count: e })}
        keyboardType="numeric"
        label={"Количество за 1 прием:"}
      />
    </View>
  );
};
// how often, time
const tabs = [
  { value: "first", label: "1 раз в день" },

  { value: "second", label: "2 разa в день" },
];
const SecondStep = ({ data, setData }) => {
  const [tab, setTab] = useState("first");
  return (
    <View style={{ gap: 20 }}>
      <Subtitle style={{ color: "white" }}>Как часто за день:</Subtitle>
      <View style={{ flexDirection: "row", gap: 20 }}>
        {tabs.map((t) => {
          const active = t.value == tab;
          return (
            <TouchableOpacity
              onPress={() => setTab(t.value)}
              key={t.value}
              style={{
                padding: 8,
                backgroundColor: active ? darkGreenColor : "white",
                borderRadius: 10,
              }}
            >
              <Text style={{ color: active ? "white" : darkGreenColor }}>
                {t.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <Time n={1} data={data} setData={setData} />
      {tab == "second" && <Time n={2} data={data} setData={setData} />}
    </View>
  );
};

const Time = ({ data, setData, n }) => {
  const [selected, setSelected] = useState(new Date());
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setSelected(currentDate);
    setData(
      n == 1
        ? { ...data, first: currentDate }
        : { ...data, second: currentDate }
    );
  };
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white", fontSize: 24 }}>
        {formatTime(selected)}
      </Text>

      <View style={{ flexDirection: "row", gap: 10 }}>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={selected}
            style={{ alignSelf: "center" }}
            mode={"time"}
            is24Hour={true}
            onChange={onChange}
          />
        )}

        <Button onPress={() => setShow(true)} variant="outlined">
          Установить время
        </Button>
      </View>
    </View>
  );
};

const InfoView = ({ name, value }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Text style={{ color: "white", fontSize: 18 }}>{name}</Text>
      <Text style={{ color: "white", fontSize: 18 }}>{value}</Text>
    </View>
  );
};
const ThirdStep = ({ data }) => {
  console.log(data, "DATA");
  return (
    <View style={{ gap: 10 }}>
      <Subtitle style={{ color: "white" }}>
        Проверьте указанную информацию:
      </Subtitle>
      <InfoView name="Название" value={data.name} />
      <InfoView name="Количество за 1 прием" value={data.count} />
      <InfoView name="Первый прием" value={formatTime(data.first)} />
      {data.second && (
        <InfoView name="Второй прием" value={formatTime(data.second)} />
      )}
    </View>
  );
};

// 1.Name
// 2.Count
// 3.
