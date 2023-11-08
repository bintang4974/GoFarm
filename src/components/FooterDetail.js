import { Box, HStack, Heading } from 'native-base';
import React from 'react';
import Button from './Button';

const FooterDetail = () => {
    return (
        <Box p={4}>
            <HStack alignItems={"center"} space={2} justifyContent={"space-between"}>
                <Heading size={"md"} color={"#F98600"}>$39.99</Heading>
                <Button />
            </HStack>
        </Box>
    )
}

export default FooterDetail