import { View } from 'react-native'
import React from 'react'

import { Box, Button, Center, FormControl, HStack, Heading, Input, Link, Text, VStack } from 'native-base'

const Login = () => {
    return (
        <Center w="100%">
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                    color: "warmGray.50"
                }}>
                    Selamat Datang Bossq
                </Heading>
                <Heading mt="1" _dark={{
                    color: "warmGray.200"
                }} color="coolGray.600" fontWeight="medium" size="xs">
                    Daftar dulu untuk melanjutkan !
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
                            color: "indigo.500"
                        }} alignSelf="flex-end" mt="1">
                            Lupa Sandi?
                        </Link>
                    </FormControl>
                    <Button mt="2" colorScheme="indigo">
                        Masuk
                    </Button>
                    <HStack mt="6" justifyContent="center">
                        <Text fontSize="sm" color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }}>
                            Belum punya akun?.{" "}
                        </Text>
                        <Link _text={{
                            color: "indigo.500",
                            fontWeight: "medium",
                            fontSize: "sm"
                        }} href="#">
                            Daftar
                        </Link>
                    </HStack>
                </VStack>
            </Box>
        </Center>
    )
}

export default Login