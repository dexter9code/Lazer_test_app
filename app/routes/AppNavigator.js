import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListScreen from "../screen/listScreen";
import AccountScreen from "../screen/AccountScreen";

const Tab = createBottomTabNavigator();

function AppNavigator(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={ListScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;
