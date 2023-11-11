import { Center, Heading, Text, Image } from 'native-base';
import React, { useEffect } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login');
        }, 3000)
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Center flex={1}>
            <Image
                    source={require('../../assets/logo.png')}
                    height={400}
                    weight={400}
                    alt='logo'
                    />
                    <Heading size={"md"}>Go-Farm Exclusive</Heading>
            </Center>
        </SafeAreaView>
    )
}

export default Splash