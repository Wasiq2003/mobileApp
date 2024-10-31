import { useSignIn } from '@clerk/clerk-expo'
import { Link, useRouter } from 'expo-router'
import { Text, TextInput, Button, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import CustomField from '../../components/customField'
import CustomButton from '../../components/customButton'

export default function Page() {
  const { signIn, setActive, isLoaded } = useSignIn()
  const router = useRouter()

  const [emailAddress, setEmailAddress] = useState('')
  const [pass, setPassword] = useState('')

  const onSignInPress = useCallback(async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password:pass,
      })

      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId })
        router.push("/(tabs)/profile")
      } else {

        console.error(JSON.stringify(signInAttempt, null, 2))
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2))
    }
  }, [isLoaded, emailAddress, pass])

  return (
    <View className='bg-white flex-1 items-center justify-center px-4'>
      <CustomField
        label='email'
        containerStyle=""
        value={emailAddress}
        handleChangeText={(e) => setEmailAddress(e)}
      />
      <CustomField
        label='password'
        containerStyle=""
        value={pass}
        handleChangeText={(e) => setPassword(e)}
      />
      <Text>{emailAddress}</Text>
      <Text>{pass}</Text>
      <CustomButton
        title="Sign In"
        containerStyle='mt-6'
        handlePress={onSignInPress} />
      <View className='flex-row gap-x-3 mt-3'>
        <Text>Don't have an account?</Text>
        <Link href="/sign-up">
          <Text className=' text-blue-500'>Sign up</Text>
        </Link>
      </View>
    </View>
  )
}