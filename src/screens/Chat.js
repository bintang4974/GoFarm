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
            messageText: ['lagii apa maniess??'],

        },

        {
            id: "2",
            userName: "Pak lek sugeng",
            image: require("../../assets/profile.png"),
            messageTime: "0:48",
            messageText: ['lagii apa maniess??'],

        },
        {
            id: "3",
            userName: "purnama rajatrakhir",
            image: require("../../assets/profile.png"),
            messageTime: "21:42",
            messageText: ['lagii apa maniess??'],

        },
        {
            id: "4",
            userName: "Bakul Pentol",
            image: require("../../assets/profile.png"),
            messageTime: "18:37",
            messageText: ['lagii apa maniess??'],

        },
        {
            id: "5",
            userName: "Gellang",
            image: require("../../assets/profile.png"),
            messageTime: "18:02",
            messageText: ['lagii apa maniess??'],

        },
        {
            id: "6",
            userName: "Bintang",
            image: require("../../assets/profile.png"),
            messageTime: "18:02",
            messageText: ['lagii apa maniess??'],

        },
        {
            id: "6",
            userName: "Ipano Roci",
            image: require("../../assets/profile.png"),
            messageTime: "18:02",
            messageText: ['lagii apa maniess??'],

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
                borderBottomRadius={35}
                width={420}
                height={140}
                shadow={5}>
                <Text bold fontSize="3xl" color="white" marginLeft="3" marginTop="4">Messages</Text>
                <Input height={10} marginLeft={2} borderRadius={35} width={390} marginTop="3" variant="outline" backgroundColor={"#3DB661"} placeholder="Search..." />
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
                                backgroundColor="#77DD77"
                                borderRadius={2}
                                padding={8}
                                width={400}
                                height={120}
                                shadow={5}>
                                <Image source={item.image} style={{ width: 80, height: 80, marginRight: 15 }} />
                                <VStack>
                                    <Text fontSize={16} marginBottom={2} marginRight={10} fontWeight="Bold" color="white">
                                        {item.userName}
                                    </Text>
                                    <Text fontSize={12} color="white" marginBottom={0}>
                                        {item.messageText[0]}
                                    </Text>
                                    <HStack>
                                        <Text fontSize={12} fontWeight="bold" color="white" marginLeft={200}>
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