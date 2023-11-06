import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Box, Center, NativeBaseProvider, ScrollView } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import Gap from "../components/Gap"

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
  
  const handleButtonClick = (e) => {
    let val = parseInt(e.target.getAttribute("val"));

    // Change State Value
    setCounter(counter + val);
  };
  
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <ScrollView>
      <Center marginTop={10}>
      <Text style={{ fontSize: 30, marginBottom: 16, fontWeight: 'bold', color: '#3DB661'}}>Cart GoFarm</Text>
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
            <Image source={item.image} style={{ width: 80, height: 80, marginRight: 15 }} />
            <View>
              <Text fontSize={16} marginBottom={2} fontWeight="bold" color="black">
                {item.title}
              </Text>
              <Text style={{fontSize:12, color:"#3DB661", marginBottom:10}}>
                {item.descriptions[0]}
              </Text>
              <Text style={{fontSize: 12, fontWeight:"bold"}}>
                {item.descriptions[1]}
              </Text>
            </View>
            <Ionicons
              style={{ marginLeft: 'auto' }}
              name={item.cart ? 'ellipse' : 'ellipse-outline'}
              size={28}
              color={item.cart ? '#3DB661' : '#3DB661'}
              onPress={() => toggleCart(item.id)}
            />
          </Box>
         
        ))}
         <Gap height={20} />
      </Center>
      </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

export default CartScreen;