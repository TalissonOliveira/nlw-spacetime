import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

import { useFonts, BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  if (!hasLoadedFonts) {
    return null
  }

  return (
    <View className="flex-1 items-center justify-center bg-gray-900">
      <Text className="font-alt text-gray-50">
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="light" translucent />
    </View>
  )
}
