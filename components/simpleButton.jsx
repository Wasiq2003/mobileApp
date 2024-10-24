import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const SimpleButton = ({handlePress, title, containerStyle}) => {
  return (
    <TouchableOpacity onPress={handlePress}
    className={`${containerStyle}`}>
        <Text className=' text-blue-400'>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default SimpleButton