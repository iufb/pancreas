import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { darkGreenColor } from "../shared/constants/Colors";
import { useToast } from "../shared/providers";
import { Button, Modal, Title } from "../shared/ui";
import {
  cancelScheduledNotification,
  formatTime,
  getItem,
  removeItem,
} from "../shared/utils";

export const MealTimeView = ({ setTime, meal }) => {
  const [open, setOpen] = useState(false);
  const [not, setNot] = useState(null);
  useEffect(() => {
    const getSavedTime = async () => {
      const not = await getItem(meal.value);
      console.log(not, "VIEW");
      if (not) {
        setNot(not);
      }
    };
    getSavedTime();
  }, []);
  return (
    <>
      <Pressable
        onPress={() => setOpen(true)}
        style={{
          paddingHorizontal: 8,
          paddingVertical: 5,
          backgroundColor: darkGreenColor,
          justifyContent: "center",
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 19,
          }}
        >
          {not && formatTime(not.date)}
        </Text>
      </Pressable>
      <ConfirmModal
        setTime={setTime}
        meal={meal}
        not={not}
        open={open}
        close={() => setOpen(false)}
      />
    </>
  );
};

const ConfirmModal = ({ open, close, not, setTime, meal }) => {
  const { sendToast } = useToast();
  return (
    not && (
      <Modal open={open} close={close}>
        <Title style={{ color: "white", textAlign: "center" }}>
          Вы уверены, что хотите удалить напоминание?
        </Title>
        <View style={{ flexDirection: "row", gap: 20, alignSelf: "center" }}>
          <Button
            variant="outlined"
            onPress={() => {
              cancelScheduledNotification(not.notId).then(() => {
                removeItem(meal.value).then(() => {
                  sendToast("Удалено.");
                  setTime(null);
                  close();
                });
              });
            }}
          >
            Да
          </Button>
          <Button variant="outlined" onPress={close}>
            Нет
          </Button>
        </View>
      </Modal>
    )
  );
};
