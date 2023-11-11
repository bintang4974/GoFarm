import Ionicons from "@expo/vector-icons/Ionicons";
import { Box, HStack, Heading } from 'native-base';
import React from 'react';
import { TouchableOpacity } from "react-native";

const Header = ({onPress}) => {
  return (
    <Box p={2}>
      <HStack space={2} justifyContent="space-between">
        <Heading size="lg">Go Farm.</Heading>
        <Box>
          <HStack space={2} justifyContent="space-between">
            <Ionicons name='basket-outline' size={28} />
            <TouchableOpacity onPress={onPress}>
              <Ionicons name="notifications-outline" size={28} />
            </TouchableOpacity>
          </HStack>
        </Box>
      </HStack>
    </Box>
  )
}

export default Header