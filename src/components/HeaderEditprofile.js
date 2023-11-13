import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { Box, HStack, Heading, Text } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";

const HeaderEditprofil = ({ title }) => {
  const navigation = useNavigation();

  return (
    <Box p={2}>
      <HStack space={3} justifyContent={"space-between"}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Ionicons name="arrow-back-outline" size={28} />
        </TouchableOpacity>
        <Heading>{title}</Heading>
      </HStack>
    </Box>
  );
};

export default HeaderEditprofil;
