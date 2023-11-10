import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Image, Avatar, Input, Text, VStack, HStack } from 'native-base';
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
                backgroundColor="#e9e9e9"
                borderBottomRadius={30}
                padding={8}
                width={410}
                height={100}
                shadow={5}>
                <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
                <Ionicons name="chevron-back-outline" marginRight={15} size={30} color="black"></Ionicons>
                </TouchableOpacity>
                <Avatar bg="green.500" source={{
                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }}>
                    AJ
                </Avatar>
                <Text fontSize={16} marginLeft={3} bold color="black">Nama Customer</Text>
                <Ionicons name="ellipsis-vertical-outline" marginLeft={100} size={30} color="black"></Ionicons>
            </Box>
            <Box
                flexDirection="row"
                
                marginTop={1}
                backgroundColor="white"
                borderBottomRadius={8}
                padding={8}
                width={450}
                height={700}
                shadow={5}>
                <VStack>
                <Box
                    backgroundColor="#d3d3d3"
                    borderRadius={15}
                    width={180}
                    height={12}
                    p={1}
                    shadow={5}
                    >
                    <HStack>
                    <Text color="black" bold alignItems="center"
                    >Lagi apa manies???</Text>
                    <Ionicons name="checkmark-done-outline" marginLeft='1' size={20}></Ionicons>
                    </HStack>
                </Box>
                <Box
                    backgroundColor="#77DD77"
                    borderRadius={15}
                    width={180}
                    height='12'
                    p={1}
                    shadow={5}
                    marginTop='5'
                    margin left= '170'
                    >
                     <HStack>
                    <Text color="white" bold alignItems="center"
                    >Lagi pucing nich gais</Text>
                    <Ionicons name="checkmark-done-outline" marginLeft='1' size={20} color='white'></Ionicons>
                    </HStack>
                </Box>
                </VStack>
            </Box>
            <Box
                flexDirection="row"
                alignItems="center"
                marginTop={0}
                backgroundColor="#d3d3d3"
                borderRadius={8}
                width={410}
                height={70}
                shadow={5}>
                <Ionicons name="grid-outline" marginLeft={10} size={30} color="black"></Ionicons>
                <Input height={10} marginLeft={4} width={300} variant="outline" backgroundColor={"white"} placeholder="Ketik Pesan" />
                <Ionicons name="paper-plane-outline" marginLeft={10} size={30} color="black"></Ionicons>
            </Box>

        </SafeAreaView>
    )
}

export default RoomChat