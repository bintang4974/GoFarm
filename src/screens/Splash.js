import { Center, Heading, Text } from 'native-base';
import React, { useEffect } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login');
        }, 3000)
    }, []);

    return (
        <SafeAreaView style={{flex: 1}}>
            <Center flex={1}>
                <Heading>Go Farm</Heading>
            </Center>
        </SafeAreaView>
    )
}

export default Splash