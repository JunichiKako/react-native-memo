import { router, useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function MemoEditScreen() {
  const { id } = useLocalSearchParams();

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title='保存' onPress={handleSavePress} />;
      },
    });
  }, []);

  const handleSavePress = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>メモ修正：{id}</Text>
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
