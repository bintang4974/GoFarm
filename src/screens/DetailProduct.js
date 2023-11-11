import Ionicons from "@expo/vector-icons/Ionicons";
import { HStack, Heading, Image, VStack, Text, Box } from 'native-base';
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { FooterDetail, HeaderDetail } from '../components';
import { View } from "react-native";

const DetailProduct = ({ route, navigation }) => {
  const params = route.params.item
  // const { item } = route.params;

  console.log(params)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderDetail title="Details" onPress={() => navigation.navigate('Home')} />
      <Image
        source={{ uri: 'https://spi.or.id/wp-content/uploads/2016/06/IMG_20160430_204305.jpg' }}
        height={250}
        width={"100%"}
        alt='slider'
      />
      <HStack justifyContent={"space-between"} p={3}>
        <VStack>
          <Heading size="md">{params.name}</Heading>
          <HStack alignItems={"center"}>
            <Ionicons name='star-half-outline' size={18} />
            <Heading size={"sm"} ml={2} mr={3}>4.9</Heading>
            <Text fontSize={12}>(286 review)</Text>
          </HStack>
        </VStack>
        <VStack>
          <VStack>
            <Heading size={"md"} color={"yellow.600"}>{params.price}</Heading>
            <Text fontSize={12}>150 ml</Text>
          </VStack>
        </VStack>
      </HStack>
      <Box p={3}>
        <Text bold color={"coolGray.600"}>{params.description}</Text>
      </Box>
      <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
        <FooterDetail />
      </View>
    </SafeAreaView>
  )
}

export default DetailProduct