import { Button, Center, HStack, ScrollView, Text } from 'native-base';
import React, { useMemo, useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Banner, Category, Header, ProductCard } from '../components';
import dummyProduct from '../data/dummyProduct';
import { TouchableOpacity } from 'react-native';

const Home = () => {
    const [product, setProduct] = useState(dummyProduct);
    const [category, setCategory] = useState('NONE');
    // const [isActive, setIsActive] = useState(false);

    const filteredList = useMemo(
        () => {
            if (category === 'NONE') return product
            return product.filter(item => category === item.category)
        },
        [category, product]
    )

    const onClick = (category) => () => {
        setCategory(category)
        // setIsActive(true);
    }

    console.log(product);

    return (
        <SafeAreaView>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Banner />
                <Category onPress={onClick("NONE")} />
                {/* <Category onPress={onClick("gula")} />
                <Category onPress={onClick("kakao")} />
                <Category onPress={onClick("jamur")} />
                <Category onPress={onClick("empon")} /> */}
                {/* <HStack p={2} justifyContent={"space-between"} space={4}>
                    <TouchableOpacity onPress={onClick("NONE")}>
                        <Center backgroundColor={isActive ? "primary.100" : "amber.100"} height={10} p={2} borderRadius={8}>
                            <Text color={"white"}>All</Text>
                        </Center>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onClick("gula")}>
                        <Center backgroundColor={isActive ? "#2C814E" : "amber.100"} height={10} p={2} borderRadius={8}>
                            <Text color={"white"}>Gula</Text>
                        </Center>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onClick("kakao")}>
                        <Center backgroundColor={isActive ? "primary.100" : "amber.100"} height={10} p={2} borderRadius={8}>
                            <Text color={"white"}>Kakao</Text>
                        </Center>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onClick("jamur")}>
                        <Center backgroundColor={isActive ? "primary.100" : "amber.100"} height={10} p={2} borderRadius={8}>
                            <Text color={"white"}>Jamur</Text>
                        </Center>
                    </TouchableOpacity>
                </HStack> */}
                <HStack flexWrap={'wrap'} justifyContent={'space-between'}>
                    {filteredList.map((item) => {
                        return (
                            <ProductCard item={item} key={item.id} />
                        )
                    })}
                </HStack>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home