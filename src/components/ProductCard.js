import Ionicons from "@expo/vector-icons/Ionicons";
import { Box, HStack, Heading, Image, VStack, Text } from 'native-base';
import React, { useState } from 'react';
import Gap from "./Gap";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProductCard = ({ item }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('DetailProduct')}>
            <Box height={150} width={190} p={2}>
                <Image
                    source={{ uri: item.image }}
                    height="100%"
                    width="100%"
                    alt='product'
                    borderRadius={15}
                />
                <HStack space={2} alignItems={"center"} justifyContent={"space-between"}>
                    <VStack space={2} >
                        <Heading size="xs">{item.name}</Heading>
                        <Text fontSize="sm">{item.price}</Text>
                    </VStack>
                    <Ionicons name='heart-outline' size={20} />
                </HStack>
            </Box>
            <Gap height={40} />
        </TouchableOpacity>
    )
}

export default ProductCard