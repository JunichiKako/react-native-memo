import { Button, StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function homeScreen() {
  const handleAllMemoPress = () => {
    router.push({ pathname: '/memos' });
  };

  const handleLabelPress = (labelId: number) => {
    const params = { labelId: labelId };
    router.push({ pathname: '/memos', params: params });
  };

  const handleAddLabelPress = () => {
    router.push({ pathname: '/labels/create' });
  };

  const handleEditLabelPress = (labelId: number) => {
    router.push({ pathname: `/labels/${labelId}` });
  };

  return (
    <View style={styles.container}>
      <Button title='ラベル追加' onPress={handleAddLabelPress} />
      <Button title='すべてのメモ' onPress={handleAllMemoPress} />

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Button title='ラベル１' onPress={() => handleLabelPress(1)} />
        <MaterialIcons
          name='edit'
          size={24}
          color={'gray'}
          onPress={() => handleEditLabelPress(1)}
        />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Button title='ラベル2' onPress={() => handleLabelPress(2)} />
        <MaterialIcons
          name='edit'
          size={24}
          color={'gray'}
          onPress={() => handleEditLabelPress(2)}
        />
      </View>
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
