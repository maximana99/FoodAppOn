import React from 'react';
import {
    Text,
    TouchableOpacity
} from 'react-native';
import { FONTS, COLORS } from '../constants';

const TextButton = ({ buttonContainerStyle, disabled, label, labelStyle, onPress}) => {
    return (
        <TouchableOpacity
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.primary,
                ...buttonContainerStyle
            }}
            disabled={disabled}
            onPress={onPress}
        >
            <Text
                style={{
                    color: COLORS.white,
                    ...FONTS.h3,
                    ...labelStyle
                }}
            >
                {label}
            </Text>

        </TouchableOpacity>
    )
}

export default TextButton;