import { Text, View } from "react-native";
import { Button } from "../shared/ui";
import { formatTime } from "../shared/utils";

export const MedicineView = ({ medicine }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View>
        <Text style={{ fontSize: 19 }}>{medicine.name}</Text>
        <Text>{formatTime(medicine.first)}</Text>
        {medicine.second && <Text>{formatTime(medicine.second)}</Text>}
      </View>
      <Button variant="primary">Удалить</Button>
    </View>
  );
};
