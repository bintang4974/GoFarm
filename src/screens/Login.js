import { Box, Button, Center, FormControl, HStack, Heading, Image, Input, Link, Text, VStack } from 'native-base'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";

const Login = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Center w="100%">
                <Image
                    source={require('../../assets/logo.png')}
                    width={200}
                    height={200}
                    alt='logo'
                />
                <Box safeArea p="2" py="8" w="90%" maxW="290">
                    <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                        color: "warmGray.50"
                    }}>
                        Selamat Datang Bossq
                    </Heading>
                    <Heading mt="1" _dark={{
                        color: "warmGray.200"
                    }} color="coolGray.600" fontWeight="medium" size="xs">
                        Go-Farm menjual Sembako berkualitas loh!
                    </Heading>

                    <VStack space={3} mt="5">
                        <FormControl>
                            <FormControl.Label>Gmail</FormControl.Label>
                            <Input />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Password</FormControl.Label>
                            <Input type="password" />
                            <Link _text={{
                                fontSize: "xs",
                                fontWeight: "500",
                                color: "#2C814E"
                            }} alignSelf="flex-end" mt="1">
                                Lupa Sandi?
                            </Link>
                        </FormControl>
                        <Button mt="2" backgroundColor={"#2C814E"}
                            onPress={() => navigation.navigate('MainApp')}>
                            Masuk
                        </Button>
                        <HStack mt="6" justifyContent="center">
                            <Text fontSize="sm" color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }}>
                                Belum punya akun?.{" "}
                            </Text>
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