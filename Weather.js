import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"]
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"]
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"]
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"]
    },
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ["#FF7300", "#FEF253"]
    },
    Haze: {
        iconName: 'weather-hazy',
        gradient: ['#4da0b0', '#d39d38']
    },
    Mist: {
        iconName: 'weather-fog',
        gradient: ['#ffffff', '#e74c3c']
    }
}

export default function Weather({temp, condition}){
    return (
        <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container} >

            <StatusBar barStyle='dark-content' />

            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white" />
                <Text style={styles.temp}> {temp}˚ </Text>
                <Text style={styles.temp}> {condition} </Text>
            </View>

            <View style={styles.halfContainer}>
                
            </View>

        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        'Thunderstorm',
        'Drizzle',
        'Rain',
        'Snow',
        'Atmosphere',
        'Clear',
        'Clouds',
        'Mist'
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    temp: {
        fontSize: 32,
        color: 'white'
    }
})