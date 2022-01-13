import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image, Animated } from "react-native";
import { SIZES, COLORS, FONTS, icons, constants, images} from "../../constants";
import {
    IconButton,
    TextButton,
    FormInput
} from "../../components";
import { utils } from "../../utils";
import { useCoordonateContext } from '../../context/useCoordonateContext';

import { AuthLayout } from '../';
//{navigation}
const SignIn = ({navigation}) => {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [emailError, setEmailError] = React.useState("")

    const [showPass, setShowPass] = React.useState(false)

    const {setLatitude1, setLongitude1, setLatitude2, setLongitude2} = useCoordonateContext();
    const [clientFirebase, setClientFirebase] = useState([]);
    useEffect(() => {
        async function getClients() {
            const response = await fetch("https://foodappon-default-rtdb.firebaseio.com/clients.json");
            const data = await response.json();
            let clients = [];
            for(const client in data) {
                clients.push({
                    email: data[client].email,
                    parola: data[client].parola,
                    latitudine1: data[client].latitudine1,
                    latitudine2: data[client].latitudine2,
                    longitudine1: data[client].longitudine1,
                    longitudine2: data[client].longitudine2
                })
            }
            setClientFirebase(clients);
        
        }
        getClients();
    }, [])

    function isEnableSignIn() {
        return email != "" && password != "" && emailError == ""
    }
    
    function checkCredentials(client) {
        return (
            email === client.email && password === client.parola
        )
    }
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
                        utils.validateEmail(value, setEmailError)
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
                                source={email == "" || (email != "" && emailError == "" ) ? icons.correct : icons.cancel}
                                style={{
                                    height:20,
                                    width: 20,
                                    tintColor: email == "" ? COLORS.gray : (email != "" && emailError == "") ? COLORS.green : COLORS.red
                                }}
                            />

                        </View>
                    }
                />
                <FormInput 
                    label="Password"
                    secureTextEntry={!showPass}
                    autoCompleteType="password"
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    onChange={(value) => setPassword(value)}
                    appendComponent={
                        <TouchableOpacity
                            style={{
                                width: 40,
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}
                            onPress={() => setShowPass(!showPass)}
                        >
                            <Image 
                                source={showPass ? icons.eye_close : icons.eye}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: COLORS.gray
                                }}
                            />
                        </TouchableOpacity>
                    }
                />

                {/* Sigh in  */}
                <TextButton 
                    label="Sign In"
                    //disabled={isEnableSignIn() ? false : true}
                    buttonContainerStyle={{
                        height: 55,
                        alignItems: 'center',
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroudColor: COLORS.primary
                    }}
                    onPress={() => {
                        const currentUser = clientFirebase.filter(checkCredentials)[0];
                        if (currentUser !== undefined) {
                            setLatitude1(currentUser.latitudine1);
                            setLongitude1(currentUser.longitudine1);
                            setLatitude2(currentUser.latitudine2);
                            setLongitude2(currentUser.longitudine2);
                            navigation.navigate("Map");
                        }
                        
                       }}
                />

                {/* Sign up */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        justifyContent: 'center'
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.darkGray,
                            ...FONTS.body3
                        }}
                    >
                        Don't have an account?
                    </Text>
                    <TextButton 
                        label="SignUp"
                        buttonContainerStyle={{
                            marginLeft: 3,
                            backgroudColor: COLORS.white,
                            borderRadius: SIZES.radius,
                            height: 30,
                            width: 100,
                        }}
                        labelStyle={{
                            color: COLORS.white,
                            ...FONTS.h3
                        }}
                        
                        onPress={() => navigation.navigate("SignUp")}
                    />


                </View>

            </View>
               
            </AuthLayout>

            
    )
}

export default SignIn;