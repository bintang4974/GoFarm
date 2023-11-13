import { TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Box,
  Center,
  NativeBaseProvider,
  ScrollView,
  Image,
  VStack,
  HStack,
  Pressable,
  Heading,
  Text,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Header } from "../components";
import Ionicon from "@expo/vector-icons/Ionicons";
import EditProfile from "./EditProfile";

const Profile = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <Header></Header>
        <ScrollView>
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
              shadow={5}
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
              bg={"#448456"}
              h={"47%"}
              w={"full"}
              rounded="lg"
              mt={5}
              py={1}
              px={8}
              p={10}
              shadow={5}
            >
              <HStack space={20}>
                <VStack>
                  <Box py={4}>
                    <Pressable
                      onPress={() => navigation.navigate("EditProfile")}
                    >
                      <HStack
                        alignItems={"center"}
                        space={6}
                        justifyContent={"space-between"}
                      >
                        <Ionicons
                          name="person-circle-sharp"
                          size={35}
                          color="white"
                        />
                        <Text fontSize="lg" bold color={"white"}>
                          {" "}
                          Personal Persone
                        </Text>
                        <Ionicon
                          name="chevron-forward-outline"
                          size={35}
                          color={"white"}
                        />
                      </HStack>
                    </Pressable>
                  </Box>
                  <Box py={4}>
                    <HStack alignItems={"center"} space={6}>
                      <Ionicons name="cart-sharp" size={35} color="white" />
                      <Text fontSize="lg" bold color={"white"}>
                        {" "}
                        Cart
                      </Text>
                      <Text fontSize="lg" bold color={"#448456"}>
                        {" "}
                        .................
                      </Text>
                      <Ionicon
                        name="chevron-forward-outline"
                        size={35}
                        color={"white"}
                      />
                    </HStack>
                  </Box>
                  <Box py={4}>
                    <Pressable onPress={() => navigation.navigate('History')}>
                      <HStack alignItems={"center"} space={6}>
                        <Ionicons
                          name="alert-circle-outline"
                          size={35}
                          color="white"
                          justifyContent="Space-betwen"
                        />
                        <Text fontSize="lg" bold color={"white"}>
                          {" "}
                          About
                        </Text>
                        <Text fontSize="lg" bold color={"#448456"}>
                          {" "}
                          ..............
                        </Text>
                        <Ionicon
                          name="chevron-forward-outline"
                          size={35}
                          color={"white"}
                        />
                      </HStack>
                    </Pressable>
                  </Box>
                  <Box py={4}>
                    <HStack alignItems={"center"} space={6}>
                      <Ionicons
                        name="settings"
                        size={35}
                        color="white"
                        alignItems="center"
                      />
                      <Text fontSize="lg" bold color={"white"}>
                        {" "}
                        Settings
                      </Text>
                      <Text fontSize="lg" bold color={"#448456"}>
                        {" "}
                        ..........
                      </Text>
                      <Ionicon
                        name="chevron-forward-outline"
                        size={35}
                        color={"white"}
                      />
                    </HStack>
                  </Box>
                </VStack>
              </HStack>
            </Box>
            <Box
              bg={"#448456"}
              h={"30%"}
              w={"full"}
              rounded="lg"
              mt={4}
              py={6}
              px={10}
              p={10}
              shadow={5}
            >
              <HStack>
                <VStack>
                  <Box py={2}>
                    <HStack alignItems={"center"} space={6}>
                      <Ionicons
                        name="md-help-circle-outline"
                        size={35}
                        color="white"
                      />
                      <Text fontSize="lg" bold color={"white"}>
                        {" "}
                        Faq
                      </Text>
                      <Text fontSize="lg" bold color={"#448456"}>
                        {" "}
                        ................
                      </Text>
                      <Ionicon
                        name="chevron-forward-outline"
                        size={35}
                        color={"white"}
                      />
                    </HStack>
                  </Box>
                  <Box>
                    <HStack alignItems={"center"} space={6}>
                      <Ionicons
                        name="log-out-outline"
                        size={35}
                        color="#C70039"
                      />
                      <Text fontSize="lg" bold color={"#C70039"}>
                        {" "}
                        Logout
                      </Text>
                    </HStack>
                  </Box>
                </VStack>
              </HStack>
            </Box>
          </Box>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default Profile;
