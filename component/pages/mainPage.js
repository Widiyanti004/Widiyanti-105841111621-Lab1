import React, { useEffect } from 'react'
import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import ButtonComponent from '../button/button';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Navbar from '../Navbar/bottomNavbar';

const image = { uri: "https://th.bing.com/th/id/OIP.ROS28_sL5d9Gq2JJMVtfVAAAAA?rs=1&pid=ImgDetMain"}
const { height } = Dimensions.get('window') // Mendapatkan tinggi layar

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
                        <Text style = {styles.Fashion}>Fashion</Text>
                        <Text style = {styles.Sale}>Sale</Text>
                        <ButtonComponent title = "Check" onPress = {() => navigation.navigate('NextPage')} color = "#FF0000" borderRadius = {2} />
                    </View>
                </View>
            </ImageBackground>
            <View style = {styles.newSection}>
            <Text style = {styles.newTitle}>New</Text>
            <Text style = {styles.newSubtitle}>You've never seen it before!</Text>
        </View>
        <View style = {{ flex: 1 }}>
            <Navbar />
        </View>
        </View>
    );

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
        fontSize: 48,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Metropolis-SemiBold'
    },
    Sale: {
        fontSize: 48,
        fontWeight: 'bold',
        color: 'white',
        marginTop: -15,
        fontFamily: 'Metropolis-SemiBold',
        marginBottom: 10
    },
    newSection: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingBottom: 50,
        backgroundColor: 'white',
        width: '100%'
    },
    newTitle: {
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 15,
        marginLeft: 15,
        fontFamily: 'Metropolis-SemiBold'
    },
    newSubtitle: {
        fontSize: 16,
        color: 'gray',
        marginLeft: 15
    },

});