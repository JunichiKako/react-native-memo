import { Button, StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { router, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import LabelListItem from '../../src/components/LabelListItem';

export default function homeScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <MaterialIcons
            name='new-label'
            size={24}
            color='black'
            onPress={handleAddLabelPress}
          />
        );
      },
    });
  }, []);

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
      <Button title='すべてのメモ' onPress={handleAllMemoPress} />

      <LabelListItem
        color='blue'
        name='ラベル１'
        onPress={() => handleLabelPress(1)}
        onEditPress={() => handleEditLabelPress(1)}
      />

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
