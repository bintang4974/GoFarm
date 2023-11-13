import { Box, HStack, Heading, Image, Text, VStack } from 'native-base'
import React, { useState } from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from 'react-native';

const CardNotification = ({ title, source, desc, onPress, background }) => {
    // const [background, setBackground] = useState('#55efc4')

    // const handleClick = () => {
    //     setBackground('#b2bec3')
    // }

    return (
        <TouchableOpacity onPress={onPress}>
            <Box backgroundColor={background} p={3}>
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