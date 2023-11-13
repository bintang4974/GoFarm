import React, { useState } from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Box, Button, Center, HStack, NativeBaseProvider, ScrollView, Text, Image } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import Gap from "../components/Gap"
import { Header } from '../components';

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'PARII',
      descriptions: ['HASIL PANEN', 'RP. 579.000'],
      image: require('../../assets/padi.jpg')
    },
    {
      id: 2,
      title: 'JAGUNG',
      descriptions: ['SAYUR', 'RP. 699.000'],
      image: require('../../assets/jagung.jpg')
    },
    {
      id: 3,
      title: 'GULA',
      descriptions: ['HASIL PANEN', 'RP. 599.000'],
      image: require('../../assets/gula.jpg')
    },
    {
      id: 4,
      title: 'TEPUNG',
      descriptions: ['HASIL PANEN', 'RP. 599.000'],
      image: require('../../assets/tepung.jpg')
    },
    {
      id: 5,
      title: 'WORTEL',
      descriptions: ['HASIL PANEN', 'RP. 599.000'],
      image: require('../../assets/wortel.jpg')
    },
  ]);

  const toggleCart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, cart: !item.cart } : item
      )
    );
  };
  
  // const handleButtonClick = (e) => {
  //   let val = parseInt(e.target.getAttribute("val"));

  //   // Change State Value
  //   setCounter(counter + val);
  // };
  
  return (
    <NativeBaseProvider>
      <SafeAreaView>
            <Box backgroundColor="#77DD77"
                borderBottomRadius={50}
                width={420}
                height={120}
                shadow={5}
                alignItems="center">
                <Text bold fontSize="3xl" color="white" marginLeft="3" marginTop="4">Cart GoFram</Text>
                <Ionicons name="basket-outline" size={50} color='white'></Ionicons>
            </Box>
        <ScrollView>
      <Center marginTop={10}>
        {cartItems.map((item) => (
          <Box
            key={item.id}
            flexDirection="row"
            alignItems="center"
            marginTop={5}
            backgroundColor="white"
            borderRadius={8}
            padding={8}
            width={350}
            height={160}
            shadow={5}
            onPress={() => toggleCart(item.id)}
          >
            <Image source={item.image} width='20' height='20' marginRight='15' borderRadius={20}  alt='image' />
            <View>
              <Text fontSize={16} marginBottom={2} bold color="black">
                {item.title}
              </Text>
              <Text fontSize={12} color="#3DB661" marginBottom={3}>
                {item.descriptions[0]}
              </Text>
              <Text fontSize={12} fontWeight="bold">
                {item.descriptions[1]}
              </Text>
              <HStack space={3} justifyContent={"space-between"}>
                    <Button size={6} backgroundColor={"#3DB661"}>+</Button>
                    <Text fontSize= '18'>0</Text>
                    <Button size={6} backgroundColor={"#3DB661"}>-</Button>
                    </HStack>
            </View>
            <Ionicons
              marginLeft= 'auto'
              name={item.cart ? 'ellipse' : 'ellipse-outline'}
              size={28}
              color={item.cart ? '#3DB661' : '#3DB661'}
              onPress={() => toggleCart(item.id)}
            />
          </Box>
         
        ))}
         <Gap height={140} />
      </Center>
      </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

export default CartScreen;