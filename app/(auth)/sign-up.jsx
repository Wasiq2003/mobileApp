import { View, Text, ScrollView, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomField from '../../components/customField'
import CustomButton from '../../components/customButton'
import SimpleButton from '../../components/simpleButton'
import { Link, router } from 'expo-router'
import { useSignUp } from '@clerk/clerk-expo'

const SignUp = () => {

    const { isLoaded, signUp, setActive } = useSignUp();

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [pendingVerification, setPendingVerification] = React.useState(false)
    const [code, setCode] = React.useState('')

    const onSignUpPress = async () => {
        if (!isLoaded) {
            return
        }

        try {
            await signUp.create({
                name: form.name,
                emailAddress: form.email,
                password: form.password,
            })

            await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

            setPendingVerification(true)
        } catch (err) {
            console.error(JSON.stringify(err, null, 2))
            Alert.alert("Error", err[0].longMessage);
        }
    }

    const onPressVerify = async () => {
        if (!isLoaded) {
            return
        }

        try {
            const completeSignUp = await signUp.attemptEmailAddressVerification({
                code,
            })

            if (completeSignUp.status === 'complete') {
                await setActive({ session: completeSignUp.createdSessionId })
                router.replace('/(tabs)/home')
            } else {
                console.error(JSON.stringify(completeSignUp, null, 2))
            }
        } catch (err) {
            console.error(JSON.stringify(err, null, 2))
            Alert.alert("Error", err[0].longMessage);
        }
    }


    return (
        <ScrollView contentContainerStyle={{ height: '100%' }}>
            {!pendingVerification && (
                <View className='bg-white flex-1 items-center justify-center'>
                    <Text className=' font-bold text-xl'>Create your account</Text>
                    <CustomField
                        label='Name'
                        containerStyle='mt-7'
                        value={form.name}
                        handleChangeText={(e) => setForm({ ...form, name: e })}
                    />
                    <CustomField
                        label='Email'
                        containerStyle='mt-7'
                        value={form.email}
                        handleChangeText={(e) => setForm({ ...form, email: e })} />
                    <CustomField
                        label='Password'
                        containerStyle='mt-7'
                        value={form.password}
                        handleChangeText={(e) => setForm({ ...form, password: e })} />
                    <CustomButton
                        title='Sign-up'
                        containerStyle='mt-7'
                        handlePress={onSignUpPress} />
                    <View className='flex-row gap-x-3 mt-3'>
                        <Text>already have an account?</Text>
                        <Link href="/sign-in">
                            <Text className=' text-blue-500'>Sign in</Text>
                        </Link>
                    </View>
                </View>
            )}
            {pendingVerification && (
                <View className='bg-white flex-1 items-center justify-center'>
                    <Text className=' font-bold text-xl'>Verify Your Account</Text>
                    <CustomField
                        label='Code'
                        containerStyle='mt-7'
                        value={code}
                        handleChangeText={(e) => setCode(e)}
                    />
                    <CustomButton
                        title='Verify'
                        containerStyle='mt-7'
                        handlePress={onPressVerify} />
                </View>
            )}
        </ScrollView>
    )
}

export default SignUp