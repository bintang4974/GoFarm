import Ionicons from "@expo/vector-icons/Ionicons";
import { Box, HStack, Heading } from 'native-base';
import React from 'react';

const Header = () => {
  return (
    <Box p={2}>
      <HStack space={2} justifyContent="space-between">
        <Heading size="lg">Go Farm.</Heading>
        <Ionicons name='basket-outline' size={28} />
      </HStack>
    </Box>
  )
}

export default Header