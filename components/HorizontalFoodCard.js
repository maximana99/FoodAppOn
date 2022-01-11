import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { SIZES, COLORS, FONTS, icons} from "../constants";
import { getFoodImage } from "../constants/foodImages";


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
                source={getFoodImage(item.id)}
                style={imageStyle}
            />

            <View
            style={{
                flex:1
            }}>
                <Text style={{ ...FONTS.h3, fontSize: 17}}>
                    {item.name}
                </Text>

                <Text style={{ color: COLORS.darkGray2, ...FONTS.h4}}>
                    {item.description}
                </Text>

                <Text style={{ marginTop: SIZES.base, ...FONTS.h2}}>
                    ${item.price}
                </Text>

            </View>

            <View
                style={{
                    flexDirection: 'row',
                    position: 'absolute',
                    top: 5,
                    right: SIZES.radius
                }}

            >
                <Image 
                    source={icons.calories}
                    style={{
                        width:30,
                        height:30
                    }}
                />
                <Text style={{ color: COLORS.darkGray2, ...FONTS.body5}}>
                    {item.calories} Calories
                </Text>

            </View>

        </TouchableOpacity>
    )
}

export default HorizontalFoodCard; 