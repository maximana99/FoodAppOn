import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet

} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Header, IconButton, CartQuantityButton, StepperInput } from '../../components';
import { SIZES, COLORS, FONTS, icons, constants, images, dummyData} from "../../constants";

const MyCart = ({navigation}) => {

    const [myCartList, setMyCartList] = React.useState(dummyData.myCart)
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
    function renderCartList() {
        return (
            <FlatList
                data={myCartList}
                keyExtractor={item => `${item.id}`}
                contentContainerStyle={{
                    marginTop: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: SIZES.padding * 2
                }}
                renderItem={(data, rowMap) => {
                    <View
                        style={{
                            height: 100,
                            backgroundColor: COLORS.lightGray2
                        }}
                    >
                        <Text>{data.item.name}</Text>
                    </View>
                }}
            />
        )
    }

    return (
        // <View
        //     style={{
        //         flex: 1,
        //         backgroundColor: COLORS.white
        //     }}
        // >
        //     <Text>ffffff</Text>
        //     {/* HEADER  */}
        //     {renderHeader()}
        //     {/* CART LIST */}
        //     {renderCartList()}

        //     {/* FOOTER */}
        //</View>
        <FlatList
        data={myCartList}
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={{
            marginTop: SIZES.radius,
            paddingHorizontal: SIZES.padding,
            paddingBottom: SIZES.padding * 2
        }}
        renderItem={(data, rowMap) => {
            <View
                style={{
                    height: 100,
                    backgroundColor: COLORS.lightGray2
                }}
            >
                <Text>{data.item.name}</Text>
            </View>
        }}
    />
    )
}

export default MyCart;