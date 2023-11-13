import React from "react";
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Text,
  Image,
  Pressable,
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header, HeaderEditprofil } from "../components";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Profile from "./Profile";
// import HeaderEditprofil from "../components/HeaderEditprofil";

const EditProfile = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <HeaderEditprofil />
      <Box p={4}>
        <Box
          bg={"#448456"}
          h={"20%"}
          w={"full"}
          rounded="lg"
          mt={2}
          py={3}
          px={5}
          p={10}
        >
          <HStack space={1}>
            <Image
              size={90}
              borderRadius={100}
              source={{
                uri: "https://wallpaperaccess.com/full/317501.jpg",
              }}
              alt="Alternate Text"
              mr={6}
            />
            <VStack justifyContent={"center"}>
              <Text fontSize="md" bold color={"white"}>
                {" "}
                Hy My name is Iya{" "}
              </Text>
              <Text fontSize="md" bold color={"white"}>
                {" "}
                yourname@gmail.com
              </Text>
            </VStack>
          </HStack>
        </Box>
        <Box
          pb={5}
          alignSelf="center"
          pt={3}
          p={10}
          mt={5}
          bg="#448456"
          w="full"
          rounded="lg"
          _text={{
            fontSize: "md",
            fontWeight: "medium",
            color: "warmGray.50",
            letterSpacing: "lg",
          }}
          shadow={2}
        >
          <VStack space={3} mt="5" mb="9">
            <FormControl>
              <Text fontSize="md" bold color={"white"}>
                Email.Id
              </Text>
              <Input fontSize="sm" placeholder="Email" />
            </FormControl>
            <FormControl>
              <Text fontSize="md" bold color={"white"}>
                Passsword
              </Text>
              <Input fontSize="sm" placeholder="Password" />
            </FormControl>
            <FormControl>
              <Text fontSize="md" bold color={"white"}>
                Phone
              </Text>
              <Input fontSize="sm" placeholder="Phone" />
            </FormControl>
            <FormControl>
              <Text fontSize="md" bold color={"white"}>
                Address
              </Text>
              <Input fontSize="sm" placeholder="Addres" />
            </FormControl>
          </VStack>
          <Button onPress={Profile} bold>
            Update
          </Button>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default EditProfile;
