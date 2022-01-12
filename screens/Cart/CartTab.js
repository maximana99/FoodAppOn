import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet

} from 'react-native';
import { Header, IconButton, CartQuantityButton, StepperInput } from '../../components';
import { SIZES, COLORS, FONTS, icons, constants, images} from "../../constants";

const CartTab = ({navigation}) => {

    function renderHeader() {
        <Header 
            title="MY SHOP CART"
            containerStyle={{
                height: 50,
                marginHorizontal: SIZES.padding,
                marginTop: 100
            }}
        />
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            {/* HEADER  */}
            {renderHeader()}
            {/* CART LIST */}

            {/* FOOTER */}
        </View>
    )
}

export default CartTab;