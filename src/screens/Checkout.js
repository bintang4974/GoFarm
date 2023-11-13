import { TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Box, Button, HStack, Heading, Image, ScrollView, Text, VStack } from 'native-base'
import PaymentCod from './PaymentCod'
import PaymentStatus from './PaymentStatus'
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { HeaderDetail } from '../components'


const Checkout = ({ navigation }) => {
  const [activeCard, setActiveCard] = useState('bni');

  const togglecard = (card) => {
    setActiveCard(card);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {/* <HStack p={3} space={3} alignItems={'center'}>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Ionicons name='arrow-back-outline' size={28} />
          </TouchableOpacity>
          <Heading>Checkout</Heading>
          <Ionicons name={'heart-outline'} size={28} />
        </HStack> */}
        <HeaderDetail title={"Checkout"} onPress={() => navigation.navigate('Cart')} />
        <Box p={3} justifyContent={"center"}>
          <Heading>Delivery Address</Heading>
          <HStack p={4} space={3} justifyContent={"space-between"}>
            <Image
              source={{ uri: 'https://img.icons8.com/metro/26/marker.png' }}
              height={50}
              width={50}
              alt='lokasi'
            />
            <VStack>
              <Heading fontSize={"md"}>Sidoarjo, Jawa Timur</Heading>
              <Text>Perumahan Pesona Permata Ungu</Text>
              <Text>Blok M-05, Krian, Sidoarjo, 61262.</Text>
            </VStack>
            <Image source={{ uri: 'https://img.icons8.com/material-outlined/24/forward.png' }}
              alt='arrow'
              height={50}
              width={50}
            />
          </HStack>
        </Box>


        <Box p={3} justifyContent={"center"}>
          <Heading>My Cartt</Heading>
          <HStack p={5} space={12} alignItems={"center"}>
            <Image
              source={require('../../assets/gula.jpeg')}
              height={90}
              width={70}
              borderRadius={5}
              alt='gula'
            />
            <VStack justifyContent={'center'} p={5}>
              <Heading fontSize={"md"}>Gula</Heading>
              <Text>Rp. 25.000,00</Text>
            </VStack>
            <Heading fontSize={"md"}>X 2</Heading>
          </HStack>

          <HStack p={5} space={12} alignItems={"center"}>
            <Image
              source={require('../../assets/padi.jpeg')}
              height={90}
              width={70}
              borderRadius={5}
              alt='padi'
            />
            <VStack justifyContent={'center'} p={5}>
              <Heading fontSize={"md"}>Padi</Heading>
              <Text>Rp. 30.000,00</Text>
            </VStack>
            <Heading fontSize={"md"}>X 1</Heading>
          </HStack>

          <HStack p={5} space={12} alignItems={"center"}>
            <Image
              source={require('../../assets/jagung.jpeg')}
              height={90}
              width={70}
              borderRadius={5}
              alt='jagung'
            />
            <VStack justifyContent={'center'} p={5}>
              <Heading fontSize={"md"}>Jagung</Heading>
              <Text>Rp. 15.000,00</Text>
            </VStack>
            <Heading fontSize={"md"}>X 1</Heading>
          </HStack>

          <HStack p={1} space={3} justifyContent={"space-between"}>
            <Heading>Total Item</Heading>
            <VStack>
              <Text>Rp. 95.000,00</Text>
            </VStack>
          </HStack>
        </Box>


        <Box p={4} justifyContent={"center"}>
          <Heading>Payment Method</Heading>
          <HStack p={4} space={3} justifyContent={"space-between"}>
            <Image
              source={require('../../assets/BCA.jpeg')}
              height={50}
              width={60}
              borderRadius={10}
              alt='image'
            />
            <VStack>
              <Heading fontSize={"md"}>BCA</Heading>
              <Text>1841238783 Raffiel</Text>
            </VStack>
            <Ionicons
              style={{ marginLeft: 'auto' }}
              name={activeCard == 'bca' ? 'ellipse' : 'ellipse-outline'}
              size={28}
              color={'#3DB661'}
              onPress={() => togglecard('bca')}
            />
          </HStack>
          <HStack p={4} space={3} justifyContent={"space-between"}>
            <Image
              source={require('../../assets/BNI.jpeg')}
              height={50}
              width={60}
              borderRadius={10}
              alt='image'
            />
            <VStack>
              <Heading fontSize={"md"}>BNI</Heading>
              <Text>1841238783 Raffiel</Text>
            </VStack>
            <Ionicons
              style={{ marginLeft: 'auto' }}
              name={activeCard == 'bni' ? 'ellipse' : 'ellipse-outline'}
              size={28}
              color={'#3DB661'}
              onPress={() => togglecard('bni')}
            />
          </HStack>


          <TouchableOpacity onPress={() => navigation.navigate("PaymentCod")}>
            <HStack p={4} space={3} justifyContent={"space-between"}>
              <Image
                source={require('../../assets/cod.png')}
                height={50}
                width={60}
                borderRadius={10}
                alt='image'
              />
              <VStack>
                <Heading fontSize={"md"}>COD</Heading>
                <Text>Bayar Pada Kurir Saat Barang Tiba</Text>
              </VStack>
              <Image source={{ uri: 'https://img.icons8.com/material-outlined/24/forward.png' }}
                alt='arrow'
                height={50}
                width={50}
              />
            </HStack>
          </TouchableOpacity>


          <Button onPress={() => navigation.navigate("PaymentStatus")}
            borderRadius={10}>
            Payment
          </Button>
        </Box>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Checkout;