import { Text } from 'react-native'
import { HStack, Heading, Box, Button, Image } from 'native-base'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HeaderDetail } from '../components'
import { useNavigation } from '@react-navigation/native'

const PaymentStatus = () => {
    const navigation = useNavigation()

    return (
        <SafeAreaView>
            <HeaderDetail title="Payment Status" onPress={() => navigation.navigate('Checkout')} />
            <HStack justifyContent={"center"} p={10}>
                <Heading fontSize={"md"}>Pesanan Anda Berhasil</Heading>
            </HStack>

            <Box p={2} alignItems={"center"} fontSize={'sm'}>
                <Text>Masukan Kode VA dibawah ini Guna membayar pesanan!</Text>
                <HStack justifyContent={'space-between'}>
                    <Heading fontSize={'md'}>0000012345678</Heading>
                </HStack>

                <Image source={require('../../assets/centang.png')} />
                <Heading p={5} fontSize={'md'}>Pembayaran dapat melalui Agen / Transfer ATM</Heading>

                <Button onPress={() => navigation.navigate("Checkout")}
                    borderRadius={10}>
                    Back To Checkout
                </Button>
            </Box>
        </SafeAreaView>
    )
}

export default PaymentStatus