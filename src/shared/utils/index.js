import Storage from "expo-storage";

import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
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
    content: { ...content, sound: "default" },
    trigger: {
      hour, // set Hours like date.getHours()
      minute, // set Minutes like date.getMinutes()
      repeats: true,
    },
  });
  return id;
}
export async function sendNoRepeatNotification({ content, seconds }) {
  const id = await Notifications.scheduleNotificationAsync({
    content: { ...content, sound: "default" },
    trigger: {
      seconds,
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
export function secondsDiffFromDate(inputDate, days) {
  const dayTOSec = 86400;
  // Get the current date
  let currentDate = new Date();

  // Convert both dates to milliseconds
  let inputDateMs = inputDate.getTime();
  let currentDateMs = currentDate.getTime();

  // Calculate the difference in milliseconds
  let timeDiffMs = inputDateMs - currentDateMs;

  // Convert milliseconds to seconds
  let timeDiffSeconds = Math.floor(timeDiffMs / 1000);
  let firstNot;
  if (timeDiffSeconds < 0) {
    firstNot = dayTOSec + timeDiffSeconds;
  } else {
    firstNot = timeDiffSeconds;
  }
  const arrOfTime = [];
  for (let i = 0; i < days; i++) {
    arrOfTime.push(firstNot + dayTOSec * i);
  }
  return arrOfTime;
}

export const isNotificationsPermissionsGranted = async () => {
  if (Device.isDevice) {
    const { status } = await Notifications.getPermissionsAsync();
    return status;
  }
};

export const askNotificationsPermission = async () => {
  const { status } = await Notifications.requestPermissionsAsync();
  finalStatus = status;
  return status === "granted";
};
