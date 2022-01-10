import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
    ScrollView
} from 'react-native';

import { FilterModal } from "../";


import { HORIZONTAL } from 'react-native/Libraries/Components/ScrollView/ScrollViewContext';
import {
    HorizontalFoodCard
} from "../../components"
import { FONTS, SIZES, COLORS, icons, dummyData} from "../../constants"

const Section = ({ title, onPress, children }) => {
    return (
        <View>
            {/*Header*/}
            <View
                style={{
                    flexDirection: 'row',
                    marginHorizontal: SIZES.padding,
                    marginTop: 30,
                    marginBottom: 20
                }}
            >
                <Text style={{ flex: 1, ...FONTS.h3}}>
                    {title}
                </Text>

                <TouchableOpacity
                    onPress={onPress}
                    >
                        <Text style={{ color: COLORS.primary, ...FONTS.body3}}>
                            Show All
                        </Text>

                </TouchableOpacity>

            </View>
            {/*Content*/}

        </View>
    )
}

const Home = () => {

    const [selectedCategoryId, setSelectedCategoryId] = React.useState(1)

    const [selectedMenuType, setSelectedMenuType] = React.useState(1)

    const [popular, setPopular] = React.useState([])

    const [recommends, setRecommends] = React.useState([])

    const [menuList, setMenuList] = React.useState([])

    const [showFilterModal, setShownFilterModal] = React.useState(false)


    React.useEffect(() => {
        handleChangeCategory(selectedCategoryId, selectedMenuType)
    }, [])
    // handler

    function handleChangeCategory(categoryId, menuTypeId) {

        //retrive the popular menu
        let selectedPopular = dummyData.menu.find(a => a.name == "Popular")

        //retrive the recommended menu
        let selectedRecommend = dummyData.menu.find(a => a.name == "Recommended")

        //find the menu based on the menuTypeId
        let selectedMenu = dummyData.menu.find(a => a.id == menuTypeId)

        //set the popular menu
        setPopular(selectedRecommend?.list.filter(a => a.categories.includes(categoryId)))

        //set the recommended menu based on the categoryId
        setRecommends(selectedRecommend?.list.filter(a => a.categories.includes(categoryId)))

        //set the menu based on the categoryId
        setMenuList(selectedMenu?.list.filter(a => a.categories.includes(categoryId)))

    }

    function renderSearch() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 40,
                    alignItems: 'center',
                    marginHorizontal: SIZES.padding,
                    marginVertical: SIZES.base,
                    paddingHorizontal: SIZES.radius,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.lightGray2
                }}
                >
                    <Image 
                        source={icons.search}
                        style={{
                            height:20,
                            width:20,
                            tintColor: COLORS.black
                        }}
                    />

                    <TextInput
                        style={{
                            flex: 1,
                            marginLeft: SIZES.radius,
                            ...FONTS.body3
                        }}
                        placeholder="search food"
                    />

                    <TouchableOpacity
                        onPress={() => setShownFilterModal(true)}
                    >
                        <Image 
                            source={icons.filter}
                            style={{
                                height:20,
                                width:20,
                                tintColor: COLORS.black
                            }}
                        />

                    </TouchableOpacity>
            </View>
        )
    }


    function renderMenuTypes() {
        return (
            <FlatList
                horizontal
                data={dummyData.menu}
                keyExtractor={item => `${item.id}`}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop:30,
                    marginBottom: 20
                }}
                renderItem={({item, index }) => (
                    <TouchableOpacity
                        style={{
                            marginLeft: SIZES.padding,
                            marginRight: index == dummyData.menu.length - 1 ? SIZES.padding :0 
                        }}
                        onPress={() => {
                            setSelectedMenuType(item.id)
                            handleChangeCategory
                            (selectedCategoryId, item.id)
                        }}
                    >
                        <Text
                            style={{
                                color: selectedMenuType == item.id ? COLORS.primary : COLORS.black,
                                ...FONTS.h3
                            }}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        )
    }

   


    return (
        <View
            style={{
                flex: 1
            }}
        >
            {/*Search */}
            {renderSearch()}
            {/*Filter*/}
            {showFilterModal &&
            <FilterModal 
                isVisible={showFilterModal}
                onClose={() => setShownFilterModal(false)}
            />
            }

            {/*List*/}
            {/* <ScrollView 
                style={{
                    flex:1,
                    zIndex: 1                }}
            >
                {
                    menuList.map((item, index) => 
                    <HorizontalFoodCard
                    containerStyle={{
                        height: 130,
                        alignItems: 'center',
                        marginHorizontal: SIZES.padding,
                        marginBottom: SIZES.radius,
                        elevation:3
                    }}
                    key={index} 
                    imageStyle={{
                        marginTop: 20,
                        height: 110,
                        width: 110
                    }}
                    item={item}
                    onPress={() => console.log
                    ("HorizontalFoodCard")}
                
                /> )
                }
            </ScrollView> */}
            <FlatList 
                data={menuList}
                keyExtractor={(item) => `${item.id}`}
                showsVerticalScrollIndicator={true}
                ListHeaderComponent={
                    <View>
                        
                        {/*Menu Type*/}
                        {renderMenuTypes()}
                    </View>
                }
                renderItem={({item, index}) => {
                    return (
                        <HorizontalFoodCard
                            containerStyle={{
                                height: 130,
                                alignItems: 'center',
                                marginHorizontal: SIZES.padding,
                                marginBottom: SIZES.radius,
                                elevation:3
                            }} 
                            imageStyle={{
                                marginTop: 20,
                                height: 110,
                                width: 110
                            }}
                            item={item}
                            onPress={() => console.log
                            ("HorizontalFoodCard")}
                        
                        />
                    )
                }}
                ListFooterComponent={
                    <View style={{ height: 200}} />
                }
            /> 


        </View>
       
    )
}

export default Home;