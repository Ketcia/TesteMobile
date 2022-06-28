import React, { useState, useEffect } from "react";
import MapView, { Region, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { Text, View, SafeAreaView } from "react-native";
import { GooglePlaceAutocomplete } from "react-native-google-places-autocomplete"
import styles from "./styles";


export default function App() {
    const [location, setlocation] = useState<null | Location.LocationObject>(null)
    const [region, setRegion] = useState<Region>();
    const [marker, setMarker] = useState<Region[]>();
    const [errorMsg, setErrorMsg] = useState<null | string>(null)

    async function handleBusca(data: string) {
        try {
            const response = await Location.geocodeAsync(data)
            if (response.length > 0) {
                const { latitude, longitude, altitude, accuracy } = response[0]
                setlocation({
                    coords: {
                        ...response[0],
                        altitude: altitude || 0,
                        accuracy: accuracy || 0,
                        altitudeAccuracy: null,
                        heading: null,
                        speed: null,
                    },
                    timestamp: Date.now(),
                })
                setRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.006,
                    longitudeDelta: 0.006,
                })
                setMarker([
                    {
                        latitude,
                        longitude,
                        latitudeDelta: 0.004,
                        longitudeDelta: 0.004,
                    }
                ])
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        const handleLocation = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status != "granted") {
                setErrorMsg("Permission to access location was denied")
                return
            }

            let location = await Location.getCurrentPositionAsync();
            if (location) {
                setlocation(location)
                setRegion({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.004,
                    longitudeDelta: 0.004
                })
                setMarker([
                    {
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.004,
                        longitudeDelta: 0.004,
                    },
                ])

            }
        }
        handleLocation()
    }, [])
    let text = "Waiting.."
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <GooglePlaceAutocomplete placeholder="Pesquisar endereço"
                    minLenght={7}
                    query={{
                        key: "AIzaSyASkiDH2uoIox33gZh88LUNFZf6KOz4th0",
                        language: "pt-Br",
                    }}
                    onPress={(data) => {
                        handleBusca(data.description);
                    }}
                    onFail={(error) => console.error(error)}
                    styles={styles.google}
                />
            </View>
            {!region && <Text style={styles.paragraph}>{text}</Text>}
            {region && (
                <MapView style={styles.map} region={region}>
                    {marker &&
                        marker.map((item) => (
                            <Marker key={item.latitude} coordinate={item} />
                        ))}
                </MapView>
            )}
        </SafeAreaView>
    )
}