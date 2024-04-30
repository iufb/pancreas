import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl, StyleSheet, Text, View } from "react-native";
import { Title } from "../shared/ui";
import { getItem } from "../shared/utils";

export const HealthDataTable = () => {
  const [healthData, setHealthData] = useState([]);
  const getVal = async () => {
    const data = await getItem("health");

    if (data) {
      setHealthData(data);
    }
  };
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    getVal();
    setRefreshing(false);
  };
  useEffect(() => {
    getVal();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.date}</Text>
      <Text style={styles.cell}>{item.painIntensity}</Text>
      <Text style={styles.cell}>{item.vomiting ? "Да" : "Нет"}</Text>
      <Text style={styles.cell}>{item.nausea ? "Да" : "Нет"}</Text>
      <Text style={styles.cell}>{item.abdominalBloating ? "Да" : "Нет"}</Text>
      <Text style={styles.cell}>{item.stool}</Text>
      <Text style={styles.cell}>{item.bloodPressure.systolic}</Text>
      <Text style={styles.cell}>{item.bloodPressure.diastolic}</Text>
      <Text style={styles.cell}>{item.bloodPressure.pulse}</Text>
    </View>
  );

  return (
    <>
      {healthData.length > 0 ? (
        <FlatList
          data={healthData}
          renderItem={renderItem}
          keyExtractor={(item) => item.date}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListHeaderComponent={() => (
            <View style={styles.headerRow}>
              <Text style={styles.headerCell}>Дата</Text>
              <Text style={styles.headerCell}>Боль</Text>
              <Text style={styles.headerCell}>Рвота</Text>
              <Text style={styles.headerCell}>Тошнота</Text>
              <Text style={styles.headerCell}>Вздутие живота</Text>
              <Text style={styles.headerCell}>Стул после еды</Text>
              <Text style={styles.headerCell}>Давление (Systolic)</Text>
              <Text style={styles.headerCell}>Давление (Diastolic)</Text>
              <Text style={styles.headerCell}>Пульс</Text>
            </View>
          )}
        />
      ) : (
        <Title
          style={{
            textAlign: "center",
            color: "gray",
          }}
        >
          Нет записей.
        </Title>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
  },
  headerRow: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    paddingVertical: 10,
  },
  cell: {
    flex: 1,
    textAlign: "center",
    paddingVertical: 5,
  },
  headerCell: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    paddingVertical: 5,
  },
});
