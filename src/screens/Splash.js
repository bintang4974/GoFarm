// Import beberapa komponen dari NativeBase dan React Native
import { Center, Heading, Image } from 'native-base';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";

// Fungsi komponen Splash dengan parameter navigation
const Splash = ({ navigation }) => {
    // State untuk menandai apakah navigasi sudah selesai atau belum
    const [isNavigationComplete, setNavigationComplete] = useState(false);

    // Efek menggantikan halaman setelah 3 detik
    useEffect(() => {
        // Timer untuk mengganti halaman setelah 3 detik
        const timer = setTimeout(() => {
            navigation.replace('Login'); // Mengganti halaman ke 'Login'
            setNavigationComplete(true); // Menandai bahwa navigasi sudah selesai
        }, 3000);

        // Membersihkan timer jika komponen di-unmount sebelum waktu habis
        return () => clearTimeout(timer);
    }, [navigation]);

    // Kondisi ketika proses navigasi masih berlangsung
    if (!isNavigationComplete) {
        // SafeAreaView untuk memastikan konten tetap dalam area aman di sekitar layar
        return (
            <SafeAreaView style={{ flex: 1 }}>
                {/* Komponen Center untuk menempatkan kontennya di tengah layar */}
                <Center flex={1}>
                    {/* Komponen Image untuk menampilkan logo */}
                    <Image
                        source={require('../../assets/logo.png')}
                        height={400}
                        width={400}
                        alt='logo'
                    />
                    {/* Komponen Heading untuk judul berukuran medium */}
                    <Heading size={"md"}>Go-Farm Exclusive</Heading>
                </Center>
            </SafeAreaView>
        );
    }

    return null; // Mengembalikan null setelah proses navigasi selesai
};

export default Splash;
