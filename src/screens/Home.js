import React, { useEffect, useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Gap, Header, ProductCard } from '../components';
import { Input, HStack, FlatList, ScrollView } from 'native-base';
import dummyProduct from '../data/dummyProduct';

const Home = () => {
    const [product, setProduct] = useState(dummyProduct);

    // useEffect(() => {
    //     // getProduct();
    //     setProduct(dummyProduct)
    // }, []);

    // const getProduct = () => {
    //     setProduct(dummyProduct);
    // }

    // const renderProduct = ({ item }) => {
    //     return <ProductCard item={item} />
    // }

    console.log(product);

    return (
        <SafeAreaView>
            <ScrollView>
                <Header />
                <HStack flexWrap={'wrap'} justifyContent={'space-between'}>
                    {/* <FlatList
                    data={product}
                    renderItem={renderProduct}
                    keyExtractor={(item) => item.id}
                /> */}
                    {product.map((item) => {
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