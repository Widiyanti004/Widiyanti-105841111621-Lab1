import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

function HomeScreen () {
    return (
        <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    )
}

function ShopScreen () {
    return(
        <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Shop!</Text>
        </View>
    )
}

function BagScreen () {
    return(
        <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Bag!</Text>
        </View>
    )
}

function FavoritesScreen () {
    return(
        <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Favorites!</Text>
        </View>
    )
}


function ProfileScreen () {
    return(
        <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Profile!</Text>
        </View>
    )
}

const Tab = createBottomTabNavigator();

export default function Navbar() {
    return (
        <Tab.Navigator
            screenOptions = {({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case 'Home':
                            iconName = 'home_outline';
                            break;
                        case 'Shop':
                            iconName = 'cart_outline';
                            break;
                        case 'Bag':
                            iconName = 'bag_outline';
                            break;
                        case 'Favorites':
                            iconName = 'heart_outline';
                            break;
                        case 'Profile':
                            iconName = 'person_outline';
                            break;
                        default:
                            iconName = 'circle';
                    } 

                    return <Icon name = {iconName} size = {size} color = {color} />;
                },
            })}
                tabBarOptions = {{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}
            >
            <Tab.Screen name = "Home" component = {HomeScreen} />
            <Tab.Screen name = "Shop" component = {ShopScreen} />
            <Tab.Screen name = "Bag" component = {BagScreen} />
            <Tab.Screen name = "Favorites" component = {FavoritesScreen} />
            <Tab.Screen name = "Profile" component = {ProfileScreen} />
        </Tab.Navigator>
    );
}



    