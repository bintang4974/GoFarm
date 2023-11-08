import { View } from 'react-native';
import React from 'react';
import { Box, Center, HStack, Heading, Text } from 'native-base';

const Button = () => {
  return (
    <Box backgroundColor={"#448456"} p={3} borderRadius={20} width={"50%"} alignItems={"center"}>
      <Heading size={"sm"} color={"white"}>Add To Cart</Heading>
    </Box>
  )
}

export default Button