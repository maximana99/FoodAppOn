import React from "react";
import {  
    View,
    Text
} from 'react-native';

import { FONTS } from "../constants";

export const Header = ({ containerStyle, title}) => {
    return (
        <View 
            style={{
                flexDirection: 'row',
                ...containerStyle
            }}
        >
            {/* Left */}

            {/* Title */}
            <View 
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Text style={{ ...FONTS.h3}}>
                    {title}
                </Text>

            </View>

            {/* Right */}
        </View>
    )
}