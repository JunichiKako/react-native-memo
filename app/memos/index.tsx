import { router, useLocalSearchParams } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function MemoListScreen() {
  const { labelId } = useLocalSearchParams();

  const handleCreatePress = () => {
    router.push({ pathname: '/memos/create' });
  };

  const handleMemoPress = (memoId: string) => {
    router.push({ pathname: `/memos/${memoId}` });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {labelId ? `ラベルID：${labelId}` : 'すべてのメモ'}
      </Text>
      <Button title='メモ作成' onPress={handleCreatePress} />
      <Button title='メモ１' onPress={() => handleMemoPress('ABCD')} />
      <Button title='メモ2' onPress={() => handleMemoPress('EFGH')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
