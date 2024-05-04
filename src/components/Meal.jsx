import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { darkGreenColor } from "../shared/constants/Colors";
import { getItem } from "../shared/utils";
import { MealTimeView } from "./MealTimeView";
import { CreateMealNotificationButton } from "./createMealNotificationButton";

export const Meal = ({ meal }) => {
  const [time, setTime] = useState(null);
  useEffect(() => {
    const getSavedTime = async () => {
      const not = await getItem(meal.value);
      if (not) {
        setTime(not.date);
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
      {time && <MealTimeView setTime={setTime} meal={meal} />}
      <CreateMealNotificationButton setDate={setTime} meal={meal} />
    </View>
  );
};
