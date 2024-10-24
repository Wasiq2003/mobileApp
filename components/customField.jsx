import { View, Text, TextInput } from 'react-native'
import React from 'react'

const CustomField = ({ label, containerStyle, value, handleChangeText, placeholder }) => {
  return (
    <View className={`w-full space-y-2 ${containerStyle}`}>
      <Text className='text-lg'>{label}</Text>
      <View className=' h-12 bg-neutral-300 rounded-full border border-neutral-200 shadow-lg flex justify-center px-4'>
        <TextInput
          className='text-base'
          value={value}
          placeholder={placeholder}
          onChangeText={handleChangeText} />
      </View>
    </View>
  )
}

export default CustomField