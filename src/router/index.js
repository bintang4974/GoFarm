import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import { Home, Profile } from '../screens';
// import { Home, Profile } from './src/screens';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Router