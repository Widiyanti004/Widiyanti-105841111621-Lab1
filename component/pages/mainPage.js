import React, { useEffect } from 'react'
import { View, Text, ImageBackground, StyleSheet, Dimensions, FlatList, Image, TouchableOpacity } from 'react-native';
import ButtonComponent from '../button/buttonMain';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Navbar from '../Navbar/bottomNavbar';

// Import Gambar
import image1 from '../../assets/image1.webp';
import image2 from '../../assets/image2.webp';
import image3 from '../../assets/image3.webp';
import image4 from '../../assets/image4.webp';
import image5 from '../../assets/image5.webp';
import image6 from '../../assets/image6.webp';
import image7 from '../../assets/image7.webp';

const image = { uri: "https://zaskiasungkar.com/cdn/shop/files/KERUDUNG_THE_BOOKS_ART.jpg?v=1695728378&width=2000"}
const { height } = Dimensions.get('window') // Mendapatkan tinggi layar

const imageData = [
    { id: '1', uri: image1 },
    { id: '2', uri: image2 },
    { id: '3', uri: image3 },
    { id: '4', uri: image4 },
    { id: '5', uri: image5 },
    { id: '6', uri: image6 },
    { id: '7', uri: image7 },
]

function MainPage ({ navigation }) {
    const [loaded, error] = useFonts({
        'Metropolis-SemiBold':require('../../assets/fonts/Metropolis-SemiBold.otf'),
        'Metropolis-Bold': require('../../assets/fonts/Metropolis-Bold.otf'),
    });

    useEffect(()  => {
        if (loaded || error ) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }
    return (
        <View style = {{ flex: 1 }}>
            <ImageBackground source = {image} 
            style = {[styles.image, { height: height * 0.7 }]}>
                <View style = {styles.overlay}>
                    <View style = {styles.bottomLeft}>
                        <Text style = {styles.Fashion}>Fashion Muslim</Text>
                        <Text style = {styles.Sale}>Sale</Text>
                        <ButtonComponent title = "Check" onPress = {() => navigation.navigate('NextPage')} color = "#FF0000" borderRadius = {2} />
                    </View>
                </View>
            </ImageBackground>
            <View style = {styles.newSection}>
            <View style = {styles.headerRow}>
            <Text style = {styles.newTitle}>New</Text>
            <TouchableOpacity onPress = {() => navigation.navigate ('ViewAllPage')}>
                <Text style = {styles.viewAll}>View all</Text>
            </TouchableOpacity>
        </View>
        <Text style = {styles.newSubtitle}>You've never seen it before!</Text>
            <FlatList
                data = {imageData}
                horizontal
                keyExtractor = {(item) => item.id}
                renderItem = {({ item }) => (
                    <TouchableOpacity onPress = {() => navigation.navigate ('ViewAllPage')}>
                        <View style = {styles.imageContainer}>
                            <Image source = {item.uri} style = {styles.sliderImage} resizeMode = "cover"/>
                            <View style = {styles.overlayText}>
                                <Text style = {styles.itemTitle}>New</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                showsHorizontalScrollIndicator = {false}
            />
            </View>
            <View style = {styles.navbarContainer}>
            <Navbar style = {styles.navbar} />
        </View>
        </View>
    )

}

export default MainPage;

const styles = StyleSheet.create({
    image: {
        justifyContent: "center",
        width: '100%'
    },
    overlay: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    bottomLeft: {
        alignItems: "flex-start"
    },
    Fashion: {
        fontSize: 46,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Metropolis-SemiBold'
    },
    Sale: {
        fontSize: 46,
        fontWeight: 'bold',
        color: 'white',
        marginTop: -10,
        fontFamily: 'Metropolis-SemiBold',
        marginBottom: 10
    },
    newSection: {
        paddingVertical: 20,
        backgroundColor: 'white',
        width: '100%'
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginBottom: 10
    },
    newTitle: {
        fontSize: 34,
        fontWeight: 'bold',
        fontFamily: 'Metropolis-SemiBold'
    },
    viewAll: {
        fontSize: 16,
        color: 'black',
        fontFamily: 'Metropolis-SemiBold'
    },
    newSubtitle: {
        fontSize: 16,
        color: 'gray',
        marginHorizontal: 15,
        marginBottom: 15
    },
    imageContainer: {
        width: 150,
        height: 200,
        margin: 20,
        borderRadius: 10,
        overflow: 'hidden',
        position: 'relative'
    },
    sliderImage: {
       width: '100%',
       height: '100%'
    },
   overlayText: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 5,
        borderRadius: 5
    },
    itemTitle: {
        color: 'white',
        fontFamily: 'Metropolis-SemiBold',
        fontSize: 14
    },
    navbarContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    }

});