import { Box, Button, Center, FormControl, Heading, Input, VStack, HStack, Text, Link } from 'native-base';
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";

const Register = ({navigation}) => {
    return (
        <SafeAreaView>
            <Center w="100%">
                <Box safeArea p="2" w="90%" maxW="290" py="8" >
                    <Heading textAlign={"center"} size="lg" color="coolGray.800" _dark={{
                        color: "warmGray.50"
                    }} fontWeight="semibold">
                        Hallo Guys !
                    </Heading>
                    <Heading textAlign={"center"} mt="1" color="coolGray.600" _dark={{
                        color: "warmGray.200"
                    }} fontWeight="medium" size="xs">
                        Silahkan daftar dulu ya!
                    </Heading>
                    <VStack space={3} mt="5">
                        <FormControl>
                            <FormControl.Label>Email</FormControl.Label>
                            <Input />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Password</FormControl.Label>
                            <Input type="password" />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Confirm Password</FormControl.Label>
                            <Input type="password" />
                        </FormControl>
                        <Button mt="2" backgroundColor={"#2C814E"}>
                            Daftar
                        </Button>
                        <HStack mt="6" justifyContent="center">
                            <Text fontSize="sm" color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }}>
                                Sudah punya akun?.{" "}
                            </Text>
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