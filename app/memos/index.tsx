import { router, useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { Button, StyleSheet, Text, View, FlatList, _View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import MemoListItem from '../../src/components/MemoListItem';
import LabelTag from '../../src/components/LabelTag';

const MEMO_DATA = [
  {
    id: 'ABCD',
    name: 'useStateについて',
    content: 'useStateについての説明',
    label: { name: 'プログラミング', color: 'blue' },
  },
  {
    id: 'EFGH',
    name: 'アカウント',
    content: 'メールアドレス： abcd@sample.com \n パスワード: abc123',
  },
  {
    id: 'IJKL',
    name: 'オムライス レシピ',
    content: '卵: 2個\nご飯：200g\n玉ねぎ:1/4個\nケチャップ ',
  },
];

export default function MemoListScreen() {
  const navigation = useNavigation();
  const { labelId } = useLocalSearchParams();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Feather
            name='edit'
            size={24}
            color='black'
            onPress={handleCreatePress}
          />
        );
      },
    });
  }, []);

  const handleCreatePress = () => {
    router.push({ pathname: '/memos/create' });
  };

  const handleMemoPress = (memoId: string) => {
    router.push({ pathname: `/memos/${memoId}` });
  };

  const handleMemoLongPress = (memoId: string) => {
    console.log('メモが長押しされました', memoId);
  };

  const handleMemoDeletePress = (memoId: string) => {
    console.log('メモが長押しされました', memoId);
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          labelId ? (
            <View style={{ margin: 10 }}>
              <LabelTag color='blue' name={`ラベルID：${labelId}`} />
            </View>
          ) : (
            <></>
          )
        }
        contentContainerStyle={{ paddingBottom: 100 }}
        data={MEMO_DATA}
        renderItem={({ item }) => (
          <MemoListItem
            name={item.name}
            content={item.content}
            onPress={() => handleMemoPress(item.id)}
            onDeletePress={() => handleMemoDeletePress(item.id)}
            onLongPress={() => handleMemoLongPress(item.id)}
            label={item.label}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
});
