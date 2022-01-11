import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image, Animated } from "react-native";
import { SIZES, COLORS, FONTS, icons, constants, images} from "../../constants";
import {
    IconButton,
    TextButton
} from "../../components"

import { AuthLayout } from '../';
//{navigation}
const SignIn = () => {
    return (
        // <View style={{
        //         marginTop: 100
        //     }}>
        //         <Text>Login Screen</Text>
             
    
        //                     <IconButton 
        //                         containerStyle={{
        //                             borderWidth: 2,
        //                             borderRadius: 10,
        //                             borderColor: COLORS.gray2
        //                         }}
        //                         icon={icons.cross}
        //                         iconStyle={{
        //                             tintColor: COLORS.gray2
        //                         }}
        //                         onPress={() => navigation.navigate("Layout")}
        //                     />
        //     </View>
            <AuthLayout
            title="Let's Sign You In"
            subtitle="Welcome back!">
               
            </AuthLayout>
    )
}

export default SignIn;