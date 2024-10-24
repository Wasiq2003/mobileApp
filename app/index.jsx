import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import CustomButton from '../components/customButton';
import { router } from 'expo-router';

export default function App({ iconType }) {
  return (
    <View className="flex-1 items-center justify-center bg-white px-4">
      <Text>Welcome Muhammad Wasiq Ansari</Text>
      <CustomButton
        title='Get start'
        containerStyle=' mt-7'
        iconType='arrow-forward-circle-outline'
        handlePress={() => router.push('/(auth)/sign-in')} />
    </View>
  );
}