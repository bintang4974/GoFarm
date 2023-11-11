import { Box, Button, Text } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const ButtonNotif = ({ title }) => {
    return (
        <TouchableOpacity>
            <Box borderWidth={1} borderRadius={10} p={2} mr={3}>
                <Text>{title}</Text>
            </Box>
        </TouchableOpacity>
    )
}

export default ButtonNotif