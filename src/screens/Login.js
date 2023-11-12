// Import beberapa komponen dari NativeBase dan React Native
import { Box, Button, Center, FormControl, HStack, Heading, Image, Input, Link, Text, VStack } from 'native-base'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";

// Fungsi komponen Login dengan parameter navigation
const Login = ({ navigation }) => {
    return (
        // SafeAreaView untuk memastikan konten tetap dalam area aman di sekitar layar
        <SafeAreaView>
            {/* Komponen Center untuk menempatkan kontennya di tengah layar */}
            <Center w="100%">
                {/* Komponen Image untuk menampilkan logo */}
                <Image
                    source={require('../../assets/logo.png')}
                    width={200}
                    height={200}
                    alt='logo'
                />
                {/* Komponen Box untuk mengelompokkan dan mengatur layout */}
                <Box safeArea p="2" py="8" w="90%" maxW="290">
                    {/* Komponen Heading untuk judul besar */}
                    <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                        color: "warmGray.50"
                    }}>
                        Selamat Datang Bossq
                    </Heading>
                    {/* Heading tambahan untuk deskripsi */}
                    <Heading mt="1" _dark={{
                        color: "warmGray.200"
                    }} color="coolGray.600" fontWeight="medium" size="xs">
                        Go-Farm menjual Sembako berkualitas loh!
                    </Heading>

                    {/* VStack (Vertical Stack) untuk menata komponen secara vertikal */}
                    <VStack space={3} mt="5">
                        {/* FormControl untuk mengelompokkan label dan input */}
                        <FormControl>
                            <FormControl.Label>Gmail</FormControl.Label>
                            {/* Input untuk memasukkan email */}
                            <Input />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Kata Sandi</FormControl.Label>
                            {/* Input type password agar huruf/angkanya tidak bisa dilihat */}
                            <Input type="password" />
                            {/* Link untuk lupa sandi */}
                            <Link _text={{
                                fontSize: "xs",
                                fontWeight: "500",
                                color: "#2C814E"
                            }} alignSelf="flex-end" mt="1">
                                Lupa Sandi?
                            </Link>
                        </FormControl>
                        {/* Button untuk menuju halaman MainApp/Home screen */}
                        <Button mt="2" backgroundColor={"#2C814E"}
                            onPress={() => navigation.navigate('MainApp')}>
                            Masuk
                        </Button>
                        {/* HStack (Horizontal Stack) untuk menata komponen secara horizontal */}
                        <HStack mt="6" justifyContent="center">
                            {/* Text untuk pesan belumlah punya akun */}
                            <Text fontSize="sm" color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }}>
                                Belum punya akun?.{" "}
                            </Text>
                            {/* Link untuk menuju halaman registrasi */}
                            <Link _text={{
                                color: "#2C814E",
                                fontWeight: "medium",
                                fontSize: "sm"
                            }} onPress={() => navigation.navigate('Register')}>
                                Daftar
                            </Link>
                        </HStack>
                    </VStack>
                </Box>
            </Center>
        </SafeAreaView>
    )
}

export default Login
