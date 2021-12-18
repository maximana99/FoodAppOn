import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    FlatList
} from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    set
} from 'react-native-reanimated';

import LinearGradient from 'react-native-linear-gradient';

import { connect } from 'react-redux';
import { setSelectedTab } from '../stores/tab/tabActions';

import {
    Home,
    Search,
    CartTab,
    Favourite,
    Notification
} from "../screens"

import { Header } from "../components";

import {
    COLORS,
    FONTS,
    SIZES,
    icons,
    constants,
    dummyData
} from "../constants"

const TabButton = ({label, icon, isFocused, onPress}) => {
    return (
        <TouchableWithoutFeedback
            onPress={onPress}
        >
            <Animated.View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                >
                    <Animated.View
                        style={{
                            flexDirection: 'row',
                            width: "80%",
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 25
                        }}
                    >
                        <Image 
                            source={icon}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.gray
                            }}
                            />
                        {isFocused && 
                        <Text
                            numberOfLines={1}
                            style={{
                                marginLeft: SIZES.base,
                                color: COLORS.gray, 
                                //...FONTS.h3
                            }}
                        >
                            {label}
                            </Text>}
                    </Animated.View>
                </Animated.View>
        </TouchableWithoutFeedback>
    )
}

const MainLayout = ({drawerAnimationStyle, navigation, selectedTab, setSelectedTab}) => {

    React.useEffect(() => {
        setSelectedTab(constants.screens.home)
    }, [])

    return (
        <Animated.View
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
                ...drawerAnimationStyle
            }}
        >
            
            {/* Header*/}

            <Header 
                containerStyle={{
                    height: 50,
                    paddingHorizontal: SIZES.padding,
                    marginTop: 40,
                    alignItems: 'center'
                }}
                title={selectedTab.toUpperCase()}
                leftComponent={
                    <TouchableOpacity
                        style={{
                            width: 40,
                            height: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth: 1,
                            borderColor: COLORS.gray2,
                            borderRadius: SIZES.radius
                        }}   
                        onPress={() => navigation.openDrawer()}
                        >

                            <Image
                                source={icons.menu}
                                />
                        </TouchableOpacity>
                }
                rightComponent={
                    <TouchableOpacity
                        style={{
                            borderRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            source={dummyData?.myProfile?.profile_image}
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: SIZES.radius
                            }}
                            />
                    </TouchableOpacity>
                }
            
            />

            {/* Content*/}
            <View
                style={{
                    flex: 1
                }}
            >
            <Text>MainLayout</Text>
            </View>


            {/* Footer*/}
            <View
                style={{
                    height: 100,
                    justifyContent: 'flex-end'
                }}
            
            >
            {/*Shadow - deleted, don't nedeed*/} 
            {/*tabs*/}

            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    paddingHorizontal: SIZES.radius,
                    paddingBottom: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    backgroundColor: COLORS.white2
                }}
            >
                <TabButton
                    label={constants.screens.home}
                    icon={icons.home}
                    isFocused={selectedTab == constants.screens.home}
                    onPress={() => setSelectedTab(constants.screens.home)}
                />
                 <TabButton
                    label={constants.screens.search}
                    icon={icons.search}
                    isFocused={selectedTab == constants.screens.search}
                    onPress={() => setSelectedTab(constants.screens.search)}
                />
                 

                <TabButton
                    label={constants.screens.cart}
                    icon={icons.cart}
                    isFocused={selectedTab == constants.screens.cart}
                    onPress={() => setSelectedTab(constants.screens.cart)}
                />

                <TabButton
                    label={constants.screens.favourite}
                    icon={icons.favourite}
                    isFocused={selectedTab == constants.screens.favourite}
                    onPress={() => setSelectedTab(constants.screens.favourite)}
                />

                <TabButton
                    label={constants.screens.notification}
                    icon={icons.notification}
                    isFocused={selectedTab == constants.screens.notification}
                    onPress={() => setSelectedTab(constants.screens.notification)}
                />

            </View>
            
         
            </View>
        </Animated.View>
    )
}

function mapStateToProps(state) {
    return {
        selectedTab: state.tabReducer.selectedTab
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setSelectedTab: (selectedTab) => { return dispatch
            (setSelectedTab(selectedTab))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)