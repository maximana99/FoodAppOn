import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Platform
} from 'react-native';

import MapView, {PROVIDER_GOOGLE, Marker} from "react-native-maps";

const Map = ({ navigation }) => {

    React.useEffect(() => {
        let initialRegion = {
            latitude: 1.5496614931250685,
            longitude: 110.36381866919922,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02
        }

        let destination = {
            latitude: 1.5496614931250685,
            longitude: 110.36381866919922,
        }
    }, [])

    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <Text>Map</Text>
        </View>
    )
}

export default Map;