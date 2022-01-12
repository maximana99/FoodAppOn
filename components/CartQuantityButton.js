import React from "react";
import {
    TouchableOpacity,
    Image,
    Touchable
} from 'react-native';
import { COLORS, SIZES } from "../constants";


const CartQuantityButton = ({ containerStyle, iconStyle, quantity, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightOrange2,
                ...containerStyle

            }}
            onPress={onPress}
        >
            <Image 
                source={icons.cart}
                style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.black,
                    ...iconStyle
                }}
            />
        </TouchableOpacity>

    )
}
export default CartQuantityButton;