import { useState } from "react";
import { RefreshControl, ScrollView } from "react-native";

export const Content = ({ children, refresh }) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    refresh();
    setRefreshing(false);
  };
  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: "white",
        padding: 8,
        borderRadius: 10,
        gap: 20,
      }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {children}
    </ScrollView>
  );
};
