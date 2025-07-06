import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { router, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import LabelListItem from '../../src/components/LabelListItem';
import { ListItem } from '@rneui/themed';

const LABEL_DATA = [
  {
    id: 1,
    name: 'プログラミング',
    color: 'blue',
  },
  {
    id: 2,
    name: 'パスワード',
    color: 'green',
  },
  {
    id: 3,
    name: '料理',
    color: 'orange',
  },
];

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
      <ScrollView contentContainerStyle={{ paddingVertical: 40 }}>
        <ListItem bottomDivider onPress={handleAllMemoPress}>
          <ListItem.Content>
            <ListItem.Title>すべてのメモ</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>

        <Text style={styles.sectionText}>ラベル</Text>

        {LABEL_DATA.map(item => (
          <LabelListItem
            key={item.id}
            color={item.color}
            name={item.name}
            onPress={() => handleLabelPress(item.id)}
            onEditPress={() => handleEditLabelPress(item.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  sectionText: {
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 14,
    fontSize: 14,
    color: '#707070',
  },

});
