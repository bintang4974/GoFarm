import { View, } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from '../components';
import Ionicon from "@expo/vector-icons/Ionicons";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from 'react';
import Gap from "../components/Gap"
import { Box, Center, HStack, Image, VStack, Heading, Pressable, NativeBaseProvider, ScrollView, Text} from 'native-base';

const History = () => {
    const [HistoriItems, setHistoryItems] = useState([
        {
          id: 1,
          title: 'PARI',
          descriptions: ['HASIL PANEN', 'RP. 100.000','Pemebelian 100x'],
          image: require('../../assets/padi.jpg')
        },
        {
          id: 2,
          title: 'JAGUNG',
          descriptions: ['SAYUR', 'RP. 5.000', 'Pemebelian 200x'],
          image: require('../../assets/jagung.jpg')
        },
        {
          id: 3,
          title: 'GULA',
          descriptions: ['HASIL PRODUKSI', 'RP. 12.000', 'Pemebelian 30x'],
          image: require('../../assets/gula.jpg')
        },
        {
          id: 4,
          title: 'TEPUNG',
          descriptions: ['HASIL PRODUKSI', 'RP. 30.000', 'Pemebelian 20x'],
          image: require('../../assets/tepung.jpg')
        },
        {
          id: 5,
          title: 'WORTEL',
          descriptions: ['HASIL PANEN', 'RP. 7.000', 'Pemebelian 70x'],
          image: require('../../assets/wortel.jpg')
        },
      ]);
      
      const toggleHistory = (itemId) => {
        setHistoryItems((prevItems) =>
          prevItems.map((item) =>
            item.id === itemId ? { ...item, Histori: !item.Histori } : item
          )
        );
      };

    return (
        <NativeBaseProvider>
      <SafeAreaView>
        <Header />
        <ScrollView>
          <Center marginTop={10}>
            <Box bg={'#448456'} w={"80%"} rounded="lg" py={3} px={10} p={10} shadow={5}>
            <VStack justifyContent={'center'} alignSelf={'center'}>
            <Text fontSize="md" bold color={"white"}> Histori Pembelian </Text>
            <Text fontSize="md" bold color={"white"}> Total pengeluaran</Text>
            <Text fontSize="xl" bold color={"white"}> Rp. 4000.000</Text>
            </VStack>
            </Box>
            {HistoriItems.map((item) => (
              <Box
                key={item.id} flexDirection="row" alignItems="center" marginTop={5} backgroundColor="white" borderRadius={8} padding={8} width={350} height={160} shadow={5} onPress={() => toggleHistory(item.id)}>
                <Image alt='image' source={item.image} width='20' height='20' marginRight='15' borderRadius={4}/>
                <View>
                  <Text bold>
                    {item.title}
                  </Text>
                  <Text fontSize={10} marginBottom={2} color="black">
                    {item.descriptions[0]}
                  </Text>
                  <Text bold>
                    {item.descriptions[1]}
                  </Text>
                  <Text bold>
                    {item.descriptions[2]}
                  </Text>
                </View>
              </Box>
            ))}
            <Gap height={20} />
          </Center>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
    )
}
export default History