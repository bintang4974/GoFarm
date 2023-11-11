import { Box, HStack, Heading, Image, Text, VStack } from 'native-base'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from 'react-native';

const CardNotification = ({ title, source, desc }) => {
    return (
        <TouchableOpacity>
            <Box backgroundColor={"green.200"} p={3}>
                <HStack space={2} justifyContent={"space-between"}>
                    <Ionicons name='time-outline' size={20} />
                    <VStack>
                        <Text>Promo</Text>
                        <Heading size={"sm"}>{title}</Heading>
                        <Image
                            source={{ uri: source }}
                            width={30}
                            height={30}
                            alt='run'
                        />
                        <Text>{desc}</Text>
                    </VStack>
                </HStack>
            </Box>
        </TouchableOpacity>
    )
}

export default CardNotification