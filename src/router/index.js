import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Cart, Home, Profile } from '../screens';
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text } from 'native-base';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color }) => {
              
              let iconName;
              switch (route.name) {
                case "Home":
                  iconName = "home-outline";
                  break;
                case "Cart":
                  iconName = "basket-outline";
                  break;
                case "Notifikasi":
                  iconName = "notifications-outline";
                  break;
                case "Profile":
                  iconName = "person-outline";
                  break;
              }
              return (
                <Ionicons
                  name={iconName}
                  size={28}
                  color={focused ? "#3DB661" : color}
                />
              );
            },
            tabBarIconStyle: { marginTop: 5 },
            tabBarStyle: {
              height: 70,
              borderTopWidth: 0,
            },
            tabBarLabel: ({ children, color, focused }) => {
              return (
                <Text color={focused ? "#3DB661" : color} mb={2}>
                  {children}
                </Text>
              );
            },
          })}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
}

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MainApp"
                component={MainApp}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default Router