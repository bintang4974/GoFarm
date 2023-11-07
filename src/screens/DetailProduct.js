import Ionicons from "@expo/vector-icons/Ionicons";
import { HStack, Heading, Image, VStack, Text, Box } from 'native-base';
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderDetail } from '../components';

const DetailProduct = () => {
  return (
    <SafeAreaView>
      <HeaderDetail title="Details" />
      <Image
        source={{ uri: 'https://spi.or.id/wp-content/uploads/2016/06/IMG_20160430_204305.jpg' }}
        height={220}
        width={"100%"}
        alt='slider'
      />
      <HStack justifyContent={"space-between"} p={3}>
        <VStack>
          <Heading size="md">Skin oil Serum</Heading>
          <HStack alignItems={"center"}>
            <Ionicons name='star-half-outline' size={18} />
            <Heading size={"sm"} ml={2} mr={3}>4.9</Heading>
            <Text fontSize={12}>(286 review)</Text>
          </HStack>
        </VStack>
        <VStack>
          <VStack>
            <Heading size={"md"} color={"yellow.600"}>$39.99</Heading>
            <Text fontSize={12}>150 ml</Text>
          </VStack>
        </VStack>
      </HStack>
      <Box p={3}>
        <Text bold color={"coolGray.600"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
      </Box>
      
    </SafeAreaView>
  )
}

export default DetailProduct