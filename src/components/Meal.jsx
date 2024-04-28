import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { darkGreenColor } from "../shared/constants/Colors";
import { formatTime, getItem } from "../shared/utils";
import { CreateMealNotificationButton } from "./createMealNotificationButton";

export const Meal = ({ meal }) => {
  const [time, setTime] = useState(null);
  useEffect(() => {
    const getSavedTime = async () => {
      const time = await getItem(meal.value);
      if (time) {
        console.log(meal.value, time);
        setTime(time.date);
      }
    };
    getSavedTime();
  }, []);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 10,
      }}
    >
      <Text
        style={{
          color: darkGreenColor,
          fontSize: 19,
        }}
      >
        {meal.label}
      </Text>
      {time && (
        <View
          style={{
            paddingHorizontal: 8,
            paddingVertical: 5,
            backgroundColor: darkGreenColor,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 19,
            }}
          >
            {formatTime(time)}
          </Text>
        </View>
      )}
      <CreateMealNotificationButton setDate={setTime} meal={meal} />
    </View>
  );
};
