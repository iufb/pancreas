import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Text, View } from "react-native";
import { useToast } from "../shared/providers";
import { Button, Icon, Modal, Tip, Title } from "../shared/ui";
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
  return (
    <Modal open={open} close={close}>
      <Title style={{ color: "white", alignSelf: "center" }}>
        {meal.label}
      </Title>
      <TimeForm setDate={setDate} meal={meal} close={close} />
    </Modal>
  );
};

const TimeForm = ({ meal, close, setDate }) => {
  const [selected, setSelected] = useState(new Date());
  const [show, setShow] = useState(false);
  const { sendToast } = useToast();
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
        body: getMealTip(meal.value),
      },
      hour: selected.getHours(),
      minute: selected.getMinutes(),
    });

    setItem(meal.value, { date: selected, notId: id }).then(() => {
      sendToast("Напоминание про " + meal.label + " создано!");
      close();
    });
  };
  return (
    <View
      style={{
        gap: 10,
      }}
    >
      <Tip>{getMealTip(meal.value)}</Tip>
      <Text style={{ color: "white", fontSize: 24, alignSelf: "center" }}>
        Выбранное время: {formatTime(selected)}
      </Text>
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
      <Button
        variant="outlined"
        style={{ marginTop: 10 }}
        onPress={() => setShow(true)}
      >
        Установить время
      </Button>
      <Button variant="outlined" onPress={saveTime}>
        Сохранить
      </Button>
    </View>
  );
};
