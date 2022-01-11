import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
    ScrollView,
    ActivityIndicator
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

    const [loading, setLoading] = useState(false);

    const [menuFirebase, setMenuFirebase] = useState([]);




    // React.useEffect(() => {
    //     handleChangeCategory(selectedCategoryId, selectedMenuType)
    // }, [])
    // handler

    useEffect(() => {
        async function getData() {
          const response = await fetch(
            "https://foodappon-default-rtdb.firebaseio.com/menus.json"
          );
          const data = await response.json();
          let menuList = [];
          for (const currentMenu in data) {
            let foodList = [];
            for (const food in data[currentMenu].list) {
              foodList.push({
                id: data[currentMenu].list[food].id,
                name: data[currentMenu].list[food].name,
                description: data[currentMenu].list[food].description,
                price: data[currentMenu].list[food].price,
                calories: data[currentMenu].list[food].calories,
              });
            }
            menuList.push({
              currentMenu: {
                id: data[currentMenu].id,
                list: foodList,
              },
            });
          }
          setLoading(true);
          setMenuFirebase(menuList);
        }
        getData();
        handleChangeCategory(selectedCategoryId, selectedMenuType);
      }, []);
    
      useEffect(() => {
        let selectedMenu = menuFirebase.find((a) => a.currentMenu.id == 1);
        setMenuList(selectedMenu?.currentMenu.list);
      }, [menuFirebase]);

    function handleChangeCategory(categoryId, menuTypeId) {

        //retrive the popular menu
        let selectedPopular = dummyData.menu.find(a => a.name == "Popular")

        //retrive the recommended menu
        let selectedRecommend = dummyData.menu.find(a => a.name == "Recommended")

        //find the menu based on the menuTypeId
        //let selectedMenu = dummyData.menu.find(a => a.id == menuTypeId)
        let selectedMenu = menuFirebase.find((a) => a.currentMenu.id == menuTypeId);


        //set the popular menu
        setPopular(selectedRecommend?.list.filter(a => a.categories.includes(categoryId)))

        //set the recommended menu based on the categoryId
        setRecommends(selectedRecommend?.list.filter(a => a.categories.includes(categoryId)))

        //set the menu based on the categoryId
        //setMenuList(selectedMenu?.list.filter(a => a.categories.includes(categoryId)))
        setMenuList(selectedMenu?.currentMenu.list);

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
            {/* {renderSearch()} */}
            {loading && renderSearch()}

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
                        {!loading && (
              <ActivityIndicator
                style={{ marginTop: 100 }}
                color="#FF6C44"
                size="large"
              />
            )}

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