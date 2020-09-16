import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        subtitle: "Actually, outside of the house"
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        subtitle: "Is like rain, but gay 🏳️‍🌈"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        subtitle: "For more info look outside"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        subtitle: "Do you want to build a snowman? Fuck no."
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        subtitle: "Atmosphere, nothing special."
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        subtitle: "Go get your ass burnt"
    },
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ["#FF7300", "#FEF253"],
        subtitle: "I know, fucking boring"
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        subtitle: "Thanks a lot China 🖕🏻"
      },
    Mist: {
        iconName: 'weather-fog',
        gradient: ['#ffffff', '#e74c3c'],
        subtitle: "It's like you have no glasses on."
    },
    Haze: {
        iconName: 'weather-hazy',
        gradient: ['#4da0b0', '#d39d38'],
        subtitle: "Just don't go outside."
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
            </View>

            <View style={[styles.halfContainer, styles.textContainer]}>
                <Text style={styles.title} >{condition} </Text>
                <Text style={styles.subtitle} >{weatherOptions[condition].subtitle}</Text>
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
    },
    title: {
        color: 'white',
        fontSize: 44,
        fontWeight: '300',
        marginBottom: 10
    },
    subtitle: {
        color: 'white',
        fontWeight: '600',
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: 'flex-start'
    }
})