import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Box, Center, HStack, Text } from 'native-base';
import Gap from './Gap';

const Category = ({ onPress, category }) => {
    return (
        <Box p={2}>
            <HStack space={5} justifyContent={"space-between"}>
                <TouchableOpacity onPress={onPress}>
                    <Center backgroundColor={"#2C814E"} height={10} p={2} borderRadius={8}>
                        <Text color={"white"}>All</Text>
                    </Center>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress}>
                    <Center backgroundColor={"#2C814E"} height={10} p={2} borderRadius={8}>
                        <Text color={"white"}>Gula</Text>
                    </Center>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress}>
                    <Center backgroundColor={"#2C814E"} height={10} p={2} borderRadius={8}>
                        <Text color={"white"}>Kakao</Text>
                    </Center>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress}>
                    <Center backgroundColor={"#2C814E"} height={10} p={2} borderRadius={8}>
                        <Text color={"white"}>Jamur</Text>
                    </Center>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress}>
                    <Center backgroundColor={"#2C814E"} height={10} p={2} borderRadius={8}>
                        <Text color={"white"}>Empon</Text>
                    </Center>
                </TouchableOpacity>
            </HStack>
        </Box>
    )
}

export default Category