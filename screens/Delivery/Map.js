import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Platform,
    Touchable
} from 'react-native';

import MapView, {PROVIDER_GOOGLE, Marker} from "react-native-maps";
import { COLORS, SIZES } from '../../constants';
import { useCoordonateContext } from '../../context/useCoordonateContext';

const Map = ({ navigation }) => {

        const {latitude1, longitude1, latitude2, longitude2} = useCoordonateContext();
 
    
        const initialRegion = {
            latitude: latitude1,
            longitude: longitude1,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02
        }

        const destination = {
            latitude: latitude2,
            longitude: longitude2,
        }
    

    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <MapView
          style={{
            
                alignSelf: "center",
                marginTop: 15,
                height: "90%",
                width: "100%",
                marginBottom: 15,
              
            
          }}
          region={initialRegion}
          customMapStyle={MapStyle}
          zoomEnabled
          mapType="mutedStandard"
        >
          <Marker coordinate={initialRegion} />
          <Marker coordinate={destination} />
        </MapView>
        <View
            style={{
                width:"100%",
                height:60,
                position: 'absolute',
                bottom: 0,
                zIndex: 100,
                backgroundColor: COLORS.primary
            }}
        >
            <TouchableOpacity
                style={{
                    width:150,
                    height: 30,
                    alignSelf: 'center',
                    backgroundColor: COLORS.white,
                    position: 'absolute',
                    top:10,
                    left: 150,
                    borderRadius: SIZES.radius
                }}
                onPress={() => navigation.navigate("MyCart")}
                
            >
                <Text
                    style={{
                        textAlign:'center',
                        marginTop: 5
                    }}
                >Back</Text>
            </TouchableOpacity>
        </View>

        </View>
    )
}

export default Map;

const MapStyle = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#1d2c4d",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#8ec3b9",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1a3646",
        },
      ],
    },
    {
      featureType: "administrative.country",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#4b6878",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#64779e",
        },
      ],
    },
    {
      featureType: "administrative.province",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#4b6878",
        },
      ],
    },
    {
      featureType: "landscape.man_made",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#334e87",
        },
      ],
    },
    {
      featureType: "landscape.natural",
      elementType: "geometry",
      stylers: [
        {
          color: "#023e58",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#283d6a",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#6f9ba5",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1d2c4d",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#023e58",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#3C7680",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#304a7d",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#98a5be",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1d2c4d",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#2c6675",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#255763",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#b0d5ce",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#023e58",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#98a5be",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1d2c4d",
        },
      ],
    },
    {
      featureType: "transit.line",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#283d6a",
        },
      ],
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [
        {
          color: "#3a4762",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#0e1626",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#4e6d70",
        },
      ],
    },
  ];