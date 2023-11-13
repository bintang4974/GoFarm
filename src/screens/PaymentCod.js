import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Box, Button, HStack, Heading, Image } from 'native-base'
import { HeaderDetail } from '../components'
import { useNavigation } from '@react-navigation/native'

const PaymentCod = () => {
    const navigation = useNavigation()

    return (
        <SafeAreaView>
            <HeaderDetail title="Payment Cod" onPress={() => navigation.navigate('Checkout')} />

            <HStack justifyContent={"center"} p={10}>
                <Heading fontSize={"md"}>Pesanan Anda Telah Diproses</Heading>
            </HStack>

            <Box p={2} alignItems={"center"} fontSize={'sm'}>

                <Image source={require('../../assets/kurir.jpeg')} />

                <HStack>
                    <Heading p={5} fontSize={'md'}>Anda Dapat Melacak Dengan Nomor Resi</Heading>
                </HStack>

                <Button onPress={() => navigation.navigate("Checkout")}
                    borderRadius={10}>
                    Back To Checkout
                </Button>

            </Box>
        </SafeAreaView>
    )
}

export default PaymentCod;