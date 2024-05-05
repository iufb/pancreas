import {
  Pressable,
  Modal as RNModal,
  View,
  useWindowDimensions,
} from "react-native";
import { greenColor } from "../constants/Colors";
import { Icon } from "./Icon";
export const Modal = ({ children, close, open, full = false }) => {
  const { fontScale } = useWindowDimensions();
  return (
    <RNModal
      transparent
      animationType="slide"
      onRequestClose={close}
      visible={open}
    >
      <View
        style={{
          position: "absolute",
          paddingHorizontal: 5,
          top: full ? 60 : fontScale > 1.2 ? `${(20 * fontScale) / 2}%` : "20%",
          left: 20,
          right: 20,
          bottom: full
            ? 80
            : fontScale > 1.2
              ? `${(40 * fontScale) / 2}%`
              : "40%",
          backgroundColor: greenColor,
          minHeight: 340,
          padding: 20,
          borderRadius: 20,
          justifyContent: "space-around",
          zIndex: 1000,
        }}
      >
        <Pressable
          style={{
            position: "absolute",
            right: 20,
            top: 20,
            width: 40,
            height: 40,
            zIndex: 1010,
          }}
          onPress={close}
        >
          <Icon name={"close"} color="white" size={30} />
        </Pressable>
        {children}
      </View>
    </RNModal>
  );
};
