// Import beberapa komponen dari NativeBase dan React Native
import { Box, Button, Center, FormControl, Heading, Input, VStack, HStack, Text, Link } from 'native-base';
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";

// Fungsi komponen Register dengan parameter navigation
const Register = ({ navigation }) => {
    return (
        // SafeAreaView untuk memastikan konten tetap dalam area aman di sekitar layar
        <SafeAreaView>
            {/* Komponen Center untuk menempatkan kontennya di tengah layar */}
            <Center w="100%">
                {/* Komponen Box untuk mengelompokkan dan mengatur layout */}
                <Box safeArea p="2" w="90%" maxW="290" py="8" >
                    {/* Komponen Heading untuk judul besar */}
                    <Heading textAlign={"center"} size="lg" color="coolGray.800" _dark={{
                        color: "warmGray.50"
                    }} fontWeight="semibold">
                        Hallo Guys !
                    </Heading>
                    {/* Heading tambahan untuk deskripsi */}
                    <Heading textAlign={"center"} mt="1" color="coolGray.600" _dark={{
                        color: "warmGray.200"
                    }} fontWeight="medium" size="xs">
                        Silahkan daftar dulu ya!
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
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Ketik Ulang Kata Sandi</FormControl.Label>
                            {/* Input type password untuk memasukkan ulang kata sandi */}
                            <Input type="password" />
                        </FormControl>
                        {/* Button untuk menuju halaman login */}
                        <Button mt="2" backgroundColor={"#2C814E"}
                            onPress={() => navigation.navigate('Login')}>
                            Daftar
                        </Button>
                        {/* HStack (Horizontal Stack) untuk menata komponen secara horizontal */}
                        <HStack mt="6" justifyContent="center">
                            {/* Text untuk pesan sudah punya akun */}
                            <Text fontSize="sm" color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }}>
                                Sudah punya akun?.{" "}
                            </Text>
                            {/* Link untuk menuju halaman login */}
                            <Link _text={{
                                color: "#2C814E",
                                fontWeight: "medium",
                                fontSize: "sm"
                            }} onPress={() => navigation.navigate('Login')}>
                                Login
                            </Link>
                        </HStack>
                    </VStack>
                </Box>
            </Center>
        </SafeAreaView>
    )
}

export default Register
