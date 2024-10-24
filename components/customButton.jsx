import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const CustomButton = ({ title, containerStyle, handlePress, iconType }) => {
    return (
        <TouchableOpacity onPress={handlePress}
            className={`bg-yellow-300 rounded-full w-full h-12 items-center justify-center flex-row gap-x-2 ${containerStyle}`}>
            <Text className=' text-lg font-bold'>{title}</Text>
            <Ionicons
                name={iconType}
                size={32}
                color="black" />
        </TouchableOpacity>
    )
}

export default CustomButton