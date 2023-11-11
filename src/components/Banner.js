import { View, ImageBackground } from 'react-native';
import React from 'react';
import { Box, HStack, Text } from 'native-base';

const Banner = () => {
    return (
        <Box height="15%" p={2}>
            <ImageBackground
                source={{ uri: 'https://img.okezone.com/content/2019/01/19/320/2006689/strategi-menteri-rini-agar-produk-petani-ri-punya-daya-saing-JgYg8vP8pa.jpg' }}
                resizeMode='cover'
                style={{ justifyContent: 'center', height: '100%', width: '100px' }}
            >
                <Text fontSize={28} color={"white"}>Go Farm</Text>
            </ImageBackground>
        </Box>
    )
}

export default Banner