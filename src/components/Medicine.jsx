import { Text, View } from "react-native";
import { useToast } from "../shared/providers";
import { Button } from "../shared/ui";
import {
  cancelScheduledNotification,
  formatTime,
  setItem,
} from "../shared/utils";

export const MedicineView = ({ data, medicine, getMeds }) => {
  const { sendToast } = useToast();
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View>
        <Text style={{ fontSize: 19 }}>
          {medicine.name} - {medicine.count}шт.
        </Text>
        <Text>{formatTime(medicine.first)}</Text>
        {medicine.second && <Text>{formatTime(medicine.second)}</Text>}
      </View>
      <Button
        variant="primary"
        onPress={() => {
          medicine.nots.forEach(async (n) => {
            if (n) {
              await cancelScheduledNotification(n);
            }
          });
          setItem(
            "meds",
            data.filter((m) => m.name !== medicine.name),
          ).then(() => {
            sendToast("Удалено");
            getMeds();
          });
        }}
      >
        Удалить
      </Button>
    </View>
  );
};
