import { Box, Button, Center, FormControl, Heading, Input, VStack } from 'native-base';
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";

const Register = () => {
    return (
        <SafeAreaView>
            <Center w="100%">
                <Box safeArea p="2" w="90%" maxW="290" py="8">
                    <Heading size="lg" color="coolGray.800" _dark={{
                        color: "warmGray.50"
                    }} fontWeight="semibold">
                        Hallo Guys !
                    </Heading>
                    <Heading mt="1" color="coolGray.600" _dark={{
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
                        <Button mt="2" colorScheme="indigo">
                            Masuk
                        </Button>
                    </VStack>
                </Box>
            </Center>
        </SafeAreaView>
    )
}

export default Register