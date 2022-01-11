import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image, Animated } from "react-native";
import { SIZES, COLORS, FONTS, icons, constants, images} from "../../constants";
import {
    IconButton
} from "../../components"
export function Login({navigation}) {

    function renderHeaderLogo() {
        return (
            <View
                style={{
                    position:'absolute',
                    top: SIZES.height > 800 ? 50 : 25,
                    left: 0,
                    right: 0,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Image 
                    source={images.logo_02}
                    resizeMode="contain"
                    style={{
                        width: SIZES.width * 0.5,
                        height: 100
                    }}
                />

            </View>
        )
    }
    return (
        // <View style={{
        //     marginTop: 300
        // }}>
        //     <Text>Login Screen</Text>
         

        //                 <IconButton 
        //                     containerStyle={{
        //                         borderWidth: 2,
        //                         borderRadius: 10,
        //                         borderColor: COLORS.gray2
        //                     }}
        //                     icon={icons.cross}
        //                     iconStyle={{
        //                         tintColor: COLORS.gray2
        //                     }}
        //                     onPress={() => navigation.navigate("Layout")}
        //                 />
        // </View>
        
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
           {renderHeaderLogo()}

            <Animated.FlatList 
                horizontal
                pagingEnabled
                data={constants.onboarding_screens}
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => `${item.id}`}
                renderItem={({ item, index}) => {
                    return (
                        <View
                            style={{
                                width: SIZES.width
                            }}
                        >
                            {/* Header */}
                            <View
                                style={{
                                    flex: 3
                                }}
                            
                            >

                                <ImageBackground
                                    source={item.backgroundImage}
                                    style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        justifyContent: 'flex-end',
                                        height: "100%",
                                        width: "100%"
                                    }}
                                >
                                    <Image 
                                        source={item.bannerImage}
                                        resizeMode="contain"
                                        style={{
                                            width: SIZES.width * 0.8,
                                            height: SIZES.width * 0.8,
                                            marginBottom: -SIZES.padding
                                        }}
                                    />

                                </ImageBackground>
                            </View>
                            {/* Detail */}
                            <View
                                style={{
                                    flex: 1,
                                    marginTop: 30,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingHorizontal: SIZES.radius
                                }}
                            >
                                <Text style={{ ...FONTS.h1, fontSize: 25}}> 
                                    {item.title}
                                </Text>
                                <Text
                                    style={{
                                        marginTop: SIZES.radius,
                                        textAlign: 'center',
                                        color: COLORS.darkGray,
                                        paddingHorizontal: SIZES.padding, 
                                        ...FONTS.body3
                                    }}
                                >
                                    {item.description}
                                </Text>

                            </View>
                        </View>
                    )
                }}
            
            />

        </View>
        
    )
}