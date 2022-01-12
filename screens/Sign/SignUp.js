import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import { AuthLayout } from '../';
import { SIZES, COLORS, FONTS, icons, constants, images} from "../../constants";
import {
    IconButton,
    TextButton,
    FormInput
} from "../../components";
import { utils } from "../../utils";

const SignUp = ({navigation}) => {

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [emailError, setEmailError] = React.useState("")
    const [username, setUsername] = React.useState("")
    const [showPass, setShowPass] = React.useState(false)

    const [usernameError, setUsernameError] = React.useState("")
    const [passwordError, setPasswordError] = React.useState("")


    return (
        <AuthLayout
            title="Getting Started"
            subtitle="Create an account to continue!"
            titleContainerStyle={{
                marginTop: SIZES.radius
            }}
        >
            {/* Form input and sign up */}
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding
                }}
            >
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
                    label="Username"
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    onChange={(value) => {
                        setUsername(value)
                    }}
                    errorMsg={usernameError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center'
                            }}
                        > 
                        <Image
                                source={username == "" || (username != "" && usernameError == "" ) ? icons.correct : icons.cancel}
                                style={{
                                    height:20,
                                    width: 20,
                                    tintColor: username == "" ? COLORS.gray : (username != "" && usernameError == "") ? COLORS.green : COLORS.red
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
                    onChange={(value) => {
                        utils.validatePassword(value, setPasswordError)
                        setPassword(value)}}
                        errorMsg={passwordError}
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
                {/* Sign up & Sign In */}
            </View>
            {/* Footer */}
        </AuthLayout>

        
    )
}

export default SignUp;