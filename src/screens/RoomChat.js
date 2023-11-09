import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Image, Avatar, Input, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../components';
import Ionicons from "@expo/vector-icons/Ionicons";

const RoomChat = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <Box
                flexDirection="row"
                alignItems="center"
                marginTop={0}
                backgroundColor="#77DD77"
                borderRadius={8}
                padding={8}
                width={410}
                height={100}
                shadow={5}>
                <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
                <Ionicons name="arrow-back-outline" marginRight={15} size={30} color="white"></Ionicons>
                </TouchableOpacity>
                <Avatar bg="green.500" source={{
                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }}>
                    AJ
                </Avatar>
                <Text fontSize={16} marginLeft={3} bold color="white">Nama Customer</Text>
                <Ionicons name="ellipsis-vertical-outline" marginLeft={120} size={30} color="white"></Ionicons>
            </Box>
            <Box
                flexDirection="row"
                
                marginTop={1}
                backgroundColor="white"
                borderRadius={8}
                padding={8}
                width={450}
                height={700}
                shadow={5}>
                <Box
                    backgroundColor="#77DD77"
                    borderRadius={35}
                    width={150}
                    height='12'
                    p={1}
                    shadow={5}
                    >
                    <Text color="white" bold alignItems="center"
                    >Lagi apa manies???</Text>
                </Box>
            </Box>
            <Box
                flexDirection="row"
                alignItems="center"
                marginTop={0}
                backgroundColor="#77DD77"
                borderRadius={8}
                width={410}
                height={70}
                shadow={5}>
                <Ionicons name="grid-outline" marginLeft={10} size={30} color="white"></Ionicons>
                <Input height={10} marginLeft={4} width={300} variant="outline" backgroundColor={"#3DB661"} placeholder="Ketik Pesan" />
                <Ionicons name="paper-plane-outline" marginLeft={10} size={30} color="white"></Ionicons>
            </Box>

        </SafeAreaView>
    )
}

export default RoomChat