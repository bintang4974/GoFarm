import { HStack, ScrollView } from 'native-base';
import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Banner, Category, Header, ProductCard } from '../components';
import dummyProduct from '../data/dummyProduct';

const Home = () => {
    const [product, setProduct] = useState(dummyProduct);

    console.log(product);

    return (
        <SafeAreaView>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Banner />
                <Category />
                <HStack flexWrap={'wrap'} justifyContent={'space-between'}>
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