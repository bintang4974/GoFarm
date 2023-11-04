import { View, Text } from 'react-native';
import React from 'react';
import { Box, Image, HStack, Input } from 'native-base';
import Ionicons from "@expo/vector-icons/Ionicons";

const Header = () => {
  return (
    <Box p={2}>
      <HStack space={3} justifyContent="space-between">
        <Image
          source={{ uri: 'https://img.icons8.com/material-outlined/24/menu.png' }}
          width={8}
          height={8}
          alt="Hamburger"
        />
        <Input height={8} width={20} variant="outline" placeholder="Cari disin" />
        <Image
          source={{ uri: 'https://img.icons8.com/material-outlined/24/shopping-cart--v1.png' }}
          width={8}
          height={8}
          alt='cart'
        />
      </HStack>
    </Box>
  )
}

export default Header