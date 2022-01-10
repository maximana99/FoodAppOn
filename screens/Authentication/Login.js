import React from 'react';
import { Text, View, TouchableOpacity } from "react-native";
import { SIZES, COLORS, FONTS, icons} from "../../constants";
import {
    IconButton
} from "../../components"
export function Login({navigation}) {
    return (
        <View style={{
            marginTop: 300
        }}>
            <Text>Login Screen</Text>
         

                        <IconButton 
                            containerStyle={{
                                borderWidth: 2,
                                borderRadius: 10,
                                borderColor: COLORS.gray2
                            }}
                            icon={icons.cross}
                            iconStyle={{
                                tintColor: COLORS.gray2
                            }}
                            onPress={() => navigation.navigate("Layout")}
                        />
        </View>
    )
}