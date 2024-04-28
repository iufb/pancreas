import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { greenColor } from "../../shared/constants/Colors";
import { Icon } from "../../shared/ui";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTintColor: greenColor,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
      }}
    >
      <Tabs.Screen
        name="info"
        options={{
          tabBarLabel: "info",
          tabBarStyle: tabLabelStyle.tab,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => (
            <Icon
              size={28}
              name="info"
              style={{}}
              color={focused ? "white" : "#193111"}
            />
          ),
          headerShown: true,
        }}
      />
      <Tabs.Screen
        name="diet"
        options={{
          tabBarLabel: "diet",
          tabBarStyle: tabLabelStyle.tab,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => (
            <Icon
              size={28}
              name="apple"
              color={focused ? "white" : "#193111"}
            />
          ),
          headerShown: true,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarLabel: "notifications",
          tabBarStyle: tabLabelStyle.tab,
          tabBarShowLabel: false,
          headerShown: true,
          tabBarIcon: ({ focused, color }) => (
            <Icon size={28} name="bell" color={focused ? "white" : "#193111"} />
          ),
        }}
      />
      <Tabs.Screen
        name="health"
        options={{
          tabBarLabel: "health",
          tabBarStyle: tabLabelStyle.tab,
          tabBarShowLabel: false,
          headerShown: true,
          tabBarIcon: ({ focused, color }) => (
            <Icon
              size={28}
              name="heart"
              color={focused ? "white" : "#193111"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="anketa"
        options={{
          tabBarLabel: "anketa",
          tabBarStyle: tabLabelStyle.tab,
          tabBarShowLabel: false,
          headerShown: true,
          tabBarIcon: ({ focused, color }) => (
            <Icon size={28} name="list" color={focused ? "white" : "#193111"} />
          ),
        }}
      />
    </Tabs>
  );
}
const tabLabelStyle = StyleSheet.create({
  tab: {
    height: 60,
    paddingBottom: 8,
    backgroundColor: greenColor,
  },
});
