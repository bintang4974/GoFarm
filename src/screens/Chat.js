import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Box, Center, NativeBaseProvider, ScrollView, Image, Text, Input, Avatar, HStack, VStack } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import roomchat from "./RoomChat";
import Gap from "../components/Gap"
import { Header } from '../components';


const Messages = () => {
    const navigation = useNavigation();
    const [messagesItems, setMessageItems] = useState([
        {
            id: "1",
            userName: "Bagas Prasetya",
            image: require("../../assets/profile.png"),
            messageTime: "3:41",
            messageText: ['lagii apa kawan?'],

        },

        {
            id: "2",
            userName: "Pak lek sugeng",
            image: require("../../assets/profile.png"),
            messageTime: "0:48",
            messageText: ['apakah kamu sibuk??'],

        },
        {
            id: "3",
            userName: "purnama rajatrakhir",
            image: require("../../assets/profile.png"),
            messageTime: "21:42",
            messageText: ['bagaimana kabarmu??'],

        },
        {
            id: "4",
            userName: "Bakul Pentol",
            image: require("../../assets/profile.png"),
            messageTime: "18:37",
            messageText: ['apakah kamu gapapa??'],

        },
        {
            id: "5",
            userName: "Gellang",
            image: require("../../assets/profile.png"),
            messageTime: "18:02",
            messageText: ['hari ini mau kemana??'],

        },
        {
            id: "6",
            userName: "Bintang",
            image: require("../../assets/profile.png"),
            messageTime: "18:02",
            messageText: ['info dong kak??'],

        },
        {
            id: "6",
            userName: "Ipano Roci",
            image: require("../../assets/profile.png"),
            messageTime: "18:02",
            messageText: ['gimana kamu hari ini??'],

        },
    ]);
    const toggleMessages = (itemId) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, message: !item.messages } : item
            )
        );
    };
    return (
        <SafeAreaView>
            <Box backgroundColor="#77DD77"
                borderBottomRadius={50}
                height={140}
                shadow={5}>
                <Text bold fontSize="3xl" color="white" marginLeft="3" marginTop="4">Messages</Text>
                <Input height={10} m={2} borderRadius={35} marginTop="3" variant="outline" backgroundColor={"#e9e9e9"} placeholder="Search..." />
            </Box>

            <Text marginTop="3" marginLeft="3" bold>Online Admin</Text>
            <ScrollView horizontal={true}> 
            <HStack>
                <Avatar bg="green.500" marginTop="4" marginLeft="4" marginBottom="10" source={{
                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }}><Avatar.Badge bg="green.500" /></Avatar>
                <Avatar bg="cyan.500" marginTop="4" marginLeft="10" marginBottom="4" source={{
                    uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                }}><Avatar.Badge bg="green.500" /></Avatar>
                <Avatar bg="indigo.500" marginTop="4" marginLeft="10" marginBottom="4" source={{
                    uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }}><Avatar.Badge bg="green.500" /></Avatar>
                <Avatar bg="amber.500" marginTop="4" marginLeft="10" marginBottom="4" source={{
                    uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                }}><Avatar.Badge bg="green.500" /></Avatar>
                <Avatar bg="cyan.500" marginTop="4" marginLeft="10" marginBottom="4" source={{
                    uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                }}><Avatar.Badge bg="green.500" /></Avatar>
                <Avatar bg="cyan.500" marginTop="4" marginLeft="10" marginBottom="4" source={{
                    uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                }}><Avatar.Badge bg="green.500" /></Avatar>
                <Avatar bg="cyan.500" marginTop="4" marginLeft="10" marginBottom="4" source={{
                    uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                }}><Avatar.Badge bg="green.500" /></Avatar>
            </HStack>
            </ScrollView>
            <ScrollView>
                <Center Bold marginTop={10} >
                    {messagesItems.map((item) => (
                        <TouchableOpacity onPress={() => navigation.navigate("RoomChat")}>
                            <Box
                                key={item.id}
                                flexDirection="row"
                                alignItems="center"
                                variant="outline"
                                marginTop={1}
                                backgroundColor="white"
                                borderRadius={2}
                                padding={8}
                                width={400}
                                height={120}
                                shadow={5}>
                                <Image source={item.image} width= '20' height= '20' marginRight= '15' alt='image' />
                                <VStack>
                                    <Text fontSize={16} marginBottom={2} marginRight={10} Bold color="black">
                                        {item.userName}
                                    </Text>
                                    <Text fontSize={12} color="black" marginBottom={0}>
                                        {item.messageText[0]}
                                    </Text>
                                    <HStack>
                                        <Text fontSize={12} bold color="black" marginLeft={200}>
                                            {item.messageTime}
                                        </Text>
                                    </HStack>
                                </VStack>
                            </Box>
                        </TouchableOpacity>

                    ))}
                    <Gap height={300} />
                </Center>
            </ScrollView>

        </SafeAreaView >
    )
}


export default Messages