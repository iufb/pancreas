import { ScrollView } from "react-native";

export const Content = ({ children }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: "white",
        padding: 8,
        borderRadius: 10,
        flex: 1,
      }}
    >
      {children}
    </ScrollView>
  );
};
