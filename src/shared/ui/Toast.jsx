import { useEffect } from "react";
import { Text, View } from "react-native";
import { lightGreenColor } from "../constants/Colors";
import { useToast } from "../providers";

export const Toast = () => {
  const { message, sendToast } = useToast();
  useEffect(() => {
    const timeout = setTimeout(() => {
      sendToast("");
    }, 4000);
    return () => clearTimeout(timeout);
  }, [message]);
  if (message) {
    return (
      <View
        style={{
          position: "absolute",
          bottom: 70,
          right: 40,
          left: 40,

          padding: 10,
          borderRadius: 10,
          zIndex: 1000,
          backgroundColor: lightGreenColor,
        }}
      >
        <Text style={{ color: "white", fontSize: 20 }}>{message}</Text>
      </View>
    );
  } else {
    return <></>;
  }
};
