import { Box, HStack, Heading, Image, ScrollView, Text, VStack } from 'native-base';
import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { ButtonNotif, CardNotification, Gap, HeaderDetail } from '../components';
import Ionicons from "@expo/vector-icons/Ionicons";

const Notification = ({ navigation }) => {
    const [background, setBackground] = useState('#55efc4')

    const handleClick = () => {
        setBackground('#fff')
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Box p={3}>
                <HeaderDetail title="Notifications" onPress={() => navigation.navigate('MainApp')} />
                <Gap height={10} />
                <HStack>
                    <ButtonNotif title={"Transaksi"} />
                    <ButtonNotif title={"Promo"} />
                    <ButtonNotif title={"Info"} />
                    <ButtonNotif title={"Feed"} />
                </HStack>
                <Gap height={20} />
            </Box>
            <Box backgroundColor={"white"} shadow={1} borderTopRadius={20} flex={1}>
                <Heading size={"md"} p={3}>Terbaru</Heading>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <CardNotification
                        onPress={handleClick}
                        background={background}
                        title={"[WAR.11] Dimulai, Serbu Diskon Hebohnya!"}
                        source={'https://img.icons8.com/ios-filled/100/ranners-crossing-finish-line.png'}
                        desc={"Ada Gula semut dengan kualitas terbaik dari kota ini, mulai dari harga yang terjangkau"}
                    />
                    <CardNotification
                        title={"Kakao Terbaru Langsung Dari Petani"}
                        source={'https://img.icons8.com/fluency-systems-filled/96/deciduous-tree.png'}
                        desc={"Ada Gula semut dengan kualitas terbaik dari kota ini, mulai dari harga yang terjangkau"}
                    />
                    <CardNotification
                        title={"Jamur Terbaik, Segera Serbu!"}
                        source={'https://img.icons8.com/ios-glyphs/90/mushroom.png'}
                        desc={"Ada Gula semut dengan kualitas terbaik dari kota ini, mulai dari harga yang terjangkau"}
                    />
                    <CardNotification
                        title={"Jamu Instan "}
                        source={'https://img.icons8.com/sf-regular-filled/96/bookmark.png'}
                        desc={"Ada Gula semut dengan kualitas terbaik dari kota ini, mulai dari harga yang terjangkau"}
                    />
                </ScrollView>
            </Box>
        </SafeAreaView>
    )
}

export default Notification