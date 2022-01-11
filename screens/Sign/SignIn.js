import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image, Animated } from "react-native";
import { SIZES, COLORS, FONTS, icons, constants, images} from "../../constants";
import {
    IconButton,
    TextButton,
    FormInput
} from "../../components";


import { AuthLayout } from '../';
//{navigation}
const SignIn = () => {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [emailError, setEmailError] = React.useState("")
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

            <View 
                style={{
                    flex: 1,
                    marginTop: SIZES.padding * 2
                }}
            >
                {/*Form inputs*/}
                <FormInput
                    label="Email"
                    keyboardType="email-address"
                    autoCompleteType="email"
                    onChange={(value) => {
                        // validate email
                        setEmail(value)
                    }}
                    errorMsg={emailError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent:'center'
                            }}
                        >
                            <Image
                                source={icons.correct}
                                style={{
                                    height:20,
                                    width: 20,
                                    tintColor: COLORS.green
                                }}
                            />

                        </View>
                    }
                />

            </View>
               
            </AuthLayout>
    )
}

export default SignIn;