import Storage from "expo-storage";

import * as Notifications from "expo-notifications";
import { Platform } from "react-native";
import { mealPlans } from "../../app/diet/about";
export const setItem = async (key, value) => {
  return Storage.setItem({ key, value: JSON.stringify(value) });
};
export const getItem = async (key) => {
  const item = JSON.parse(await Storage.getItem({ key }));
  return item;
};
export const removeItem = async (key) => {
  return Storage.removeItem({ key });
};
export function formatTime(value) {
  // Create a new Date object

  // Get the hours and minutes from the Date object
  const date = value ? new Date(value) : new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  // Format the time as a string
  let formattedTime = hours + ":" + (minutes < 10 ? "0" : "") + minutes;

  // Return the formatted time
  return formattedTime;
}
export function getCurrentDate() {
  const currentDate = new Date();

  const dd = String(currentDate.getDate()).padStart(2, "0");
  const mm = String(currentDate.getMonth() + 1).padStart(2, "0"); // January is 0!
  const yyyy = currentDate.getFullYear();

  return `${dd} / ${mm} /${yyyy}`;
}
export async function sendSchedulePushNotification({ content, hour, minute }) {
  const id = await Notifications.scheduleNotificationAsync({
    content,
    trigger: {
      hour, // set Hours like date.getHours()
      minute, // set Minutes like date.getMinutes()
      repeats: true,
      sound: Platform.OS === "android" ? null : "default",
    },
  });
  return id;
}

export async function cancelScheduledNotification(id) {
  await Notifications.cancelScheduledNotificationAsync(id);
}

export const getMealTip = (meal) => {
  switch (meal) {
    case "breakfast":
      return mealPlans[randomNumber(0, mealPlans.length)].meals[0].split(
        "."
      )[1];
    case "snack1":
      return mealPlans[randomNumber(0, mealPlans.length)].meals[1].split(
        "."
      )[1];
    case "lunch":
      return mealPlans[randomNumber(0, mealPlans.length)].meals[2].split(
        "."
      )[1];
    case "snack2":
      return mealPlans[randomNumber(0, mealPlans.length)].meals[3].split(
        "."
      )[1];
    case "dinner":
      return mealPlans[randomNumber(0, mealPlans.length)].meals[4].split(
        "."
      )[1];
    case "snack3":
      return mealPlans[randomNumber(0, mealPlans.length)].meals[5].split(
        "."
      )[1];
  }
};

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
