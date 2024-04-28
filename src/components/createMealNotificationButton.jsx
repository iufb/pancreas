import DateTimePicker from "@react-native-community/datetimepicker";
import { useRef, useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { greenColor } from "../shared/constants/Colors";
import { Button, Icon, Tip, Title } from "../shared/ui";
import {
  cancelScheduledNotification,
  formatTime,
  getItem,
  getMealTip,
  sendSchedulePushNotification,
  setItem,
} from "../shared/utils";
export const CreateMealNotificationButton = ({ meal, setDate }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onPress={() => setOpen(true)}>
        <Icon name={"plus"} size={18} color={"white"} />
      </Button>
      <CreateNotificationModal
        setDate={setDate}
        meal={meal}
        open={open}
        close={() => setOpen(false)}
      />
    </>
  );
};

const CreateNotificationModal = ({ meal, open, close, setDate }) => {
  const ref = useRef();
  return (
    <Modal
      transparent
      animationType="slide"
      onRequestClose={close}
      visible={open}
    >
      <View
        ref={ref}
        style={{
          position: "absolute",
          top: "20%",
          left: 20,
          right: 20,
          bottom: "40%",
          backgroundColor: greenColor,
          padding: 20,
          borderRadius: 20,
          justifyContent: "space-around",
        }}
      >
        <Pressable
          style={{ position: "absolute", right: 20, top: 20 }}
          onPress={close}
        >
          <Icon name={"close"} color="white" size={24} />
        </Pressable>
        <Title style={{ color: "white", alignSelf: "center" }}>
          {meal.label}
        </Title>
        <TimeForm setDate={setDate} meal={meal} close={close} />
      </View>
    </Modal>
  );
};

const TimeForm = ({ meal, close, setDate }) => {
  const [selected, setSelected] = useState(new Date());
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setSelected(currentDate);
  };
  const saveTime = async () => {
    const prevTime = await getItem(meal.value);
    if (prevTime) {
      await cancelScheduledNotification(prevTime.notId);
    }
    setDate(selected);
    const id = await sendSchedulePushNotification({
      content: {
        title: meal.label,
        body: "Время приема пищи!",
      },
      hour: selected.getHours(),
      minute: selected.getMinutes(),
    });

    setItem(meal.value, { date: selected, notId: id }).then(() => {
      close();
    });
  };
  return (
    <View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={selected}
          mode={"time"}
          is24Hour={true}
          onChange={onChange}
        />
      )}
      <Tip>{getMealTip(meal.value)}</Tip>
      <Text style={{ color: "white", fontSize: 24, alignSelf: "center" }}>
        Выбранное время: {formatTime(selected)}
      </Text>
      <Button onPress={() => setShow(true)}>Установить время</Button>
      <Button onPress={saveTime}>Сохранить</Button>
    </View>
  );
};
