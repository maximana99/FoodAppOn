import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { SIZES, COLORS} from "../constants";

const HorizontalFoodCard = ({containerStyle, imageStyle, item, onPress}) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray2,
                ...containerStyle
            }}
        >
            <Image
                source={item.image}
                style={imageStyle}
            />

        </TouchableOpacity>
    )
}

export default HorizontalFoodCard; 