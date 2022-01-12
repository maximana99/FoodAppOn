import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet

} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Header, IconButton, CartQuantityButton, StepperInput, TextButton } from '../../components';
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

        <View style={{
            flex: 1,
            paddingHorizontal: SIZES.padding,
            backgroundColor: COLORS.white
        }} >
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Image 
                source={images.success}
                resizeMode="contain"
                style={{
                    width: 150,
                    height: 150
                }}
            />
            <Text style={{ 
                marginTop: SIZES.padding,
                ...FONTS.h1
            }}>Congratulations!</Text>
            <Text style={{textAlign: 'center', marginTop: SIZES.base, color: COLORS.darkGray, ...FONTS.body3}}>Order was successfully made!</Text>
            <TextButton 
                label="               Done              "
                buttonContainerStyle={{
                    height: 55,
                    marginTop: SIZES.padding,
                    borderRadius: SIZES.radius,
                    backgroudColor: COLORS.primary
                }}
            />

        <TextButton 
                label="               Back              "
                buttonContainerStyle={{
                    height: 55,
                    marginTop: SIZES.padding,
                    borderRadius: SIZES.radius,
                    backgroudColor: COLORS.primary
                }}
                onPress={() => navigation.navigate("SignIn")}
            />
        </View>
    </View>
        
    )
}

export default MyCart;