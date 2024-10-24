import { SignedIn, SignedOut, useClerk, useUser } from '@clerk/clerk-expo'
import { Link, Redirect } from 'expo-router'
import { Text, View } from 'react-native'
import CustomButton from '../../components/customButton'

export default function Page() {
  const { user } = useUser();
  const { signOut } = useClerk();

  const handlePressSignout = () => {
    signOut({Redirect: '../../'})
  }

  return (
    <View className=' flex-1 items-center justify-center'>
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
      </SignedIn>

      <CustomButton 
      handlePress={handlePressSignout}
      title='sign-out'
      containerStyle='mt-5' />

      <SignedOut>
        <Redirect href={'../../'} />
      </SignedOut>
    </View>
  )
}