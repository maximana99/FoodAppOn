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

import { HORIZONTAL } from 'react-native/Libraries/Components/ScrollView/ScrollViewContext';
import {
    HorizontalFoodCard
} from "../../components"
import { FONTS, SIZES, COLORS, icons, dummyData} from "../../constants"

const Home = () => {

    const [selectedCategoryId, setSelectedCategoryId] = React.useState(1)

    const [selectedMenuType, setSelectedMenuType] = React.useState(1)

    const [menuList, setMenuList] = React.useState([])

    React.useEffect(() => {
        handleChangeCategory(selectedCategoryId, selectedMenuType)
    }, [])
    // handler

    function handleChangeCategory(categoryId, menuTypeId) {

        //find the menu based on the menuTypeId
        let selectedMenu = dummyData.menu.find(a => a.id == menuTypeId)

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
                    //onPress
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

    return (
        <View
            style={{
                flex: 1
            }}
        >
            {/*Search */}
            {renderSearch()}

            {/*List*/}
            <ScrollView 
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
            </ScrollView>
            {/* <FlatList 
                data={menuList}
                keyExtractor={(item) => `${item.id}`}
                showsVerticalScrollIndicator={true}
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
            /> */}


        </View>
       
    )
}

export default Home;