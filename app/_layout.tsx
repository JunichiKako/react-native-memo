import { Stack } from 'expo-router';
import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';

export default function Layout() {
  return (
    <GluestackUIProvider config={config}>
      <Stack
        screenOptions={{
          headerTintColor: '#000',
          headerStyle: { backgroundColor: '#f9f9f9' },
        }}
      >
        <Stack.Screen name='index' options={{ headerShown: false }} />
        {/* ホーム */}
        <Stack.Screen name='home/index' options={{ headerTitle: 'ホーム' }} />

        {/* ラベル */}
        <Stack.Screen
          name='labels'
          options={{ headerShown: false, presentation: 'fullScreenModal' }}
        />
        {/* メモ */}
        <Stack.Screen name='memos/index' options={{ headerTitle: 'メモ' }} />
        <Stack.Screen name='memo/create' options={{ headerTitle: '' }} />
        <Stack.Screen name='memo/[id]' options={{ headerTitle: '' }} />
      </Stack>
    </GluestackUIProvider>
  );
}
