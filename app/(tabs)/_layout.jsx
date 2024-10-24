import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const TabBarIcon = ({ name, size, focused, color }) => {
    return (
        <View>
            <Ionicons name={name} size={35} color='black' />
        </View>
    )
}

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{tabBarShowLabel: false,
            tabBarStyle:{backgroundColor: 'skyblue', height: 50}
        }}>
            <Tabs.Screen name='home'
                options={{
                    headerShown: false,
                    tabBarIcon: ({ name, size, focused, color }) => (
                        <TabBarIcon
                            name={focused? 'home' : 'home-outline'}
                            size={size}
                            focused={focused}
                            color={color}

                        />)
                }} />
            <Tabs.Screen name='bookmark'
                options={{
                    headerShown: false,
                    tabBarIcon: ({ name, size, focused, color }) => (
                        <TabBarIcon
                            name={focused? 'bookmark' : 'bookmark-outline'}
                            size={size}
                            focused={focused}
                            color={color}

                        />)
                }} />
            <Tabs.Screen name='notification'
                options={{
                    headerShown: false,
                    tabBarIcon: ({ name, size, focused, color }) => (
                        <TabBarIcon
                            name={focused? 'notifications-sharp' : 'notifications-outline'}
                            size={size}
                            focused={focused}
                            color={color}

                        />)
                }} />
            <Tabs.Screen name='profile'
                options={{
                    headerShown: false,
                    tabBarIcon: ({ name, size, focused, color }) => (
                        <TabBarIcon
                            name={focused? 'person' : 'person-outline'}
                            size={size}
                            focused={focused}
                            color={color}

                        />)
                }} />
        </Tabs>
    )
}

export default TabsLayout