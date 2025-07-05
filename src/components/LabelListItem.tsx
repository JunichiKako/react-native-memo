import { StyleSheet, View } from 'react-native';
import { ListItem } from '@rneui/themed';
import { MaterialCommunityIcons, Foundation } from '@expo/vector-icons';

type LabelListItemProps = {
  color: string;
  name: string;
  onPress: () => void;
  onEditPress: () => void;
};

export default function LabelListItem({
  color,
  name,
  onPress,
  onEditPress,
}: LabelListItemProps) {
  return (
    <View style={styles.container}>
      <ListItem bottomDivider style={styles.listItem} onPress={onPress}>
        <MaterialCommunityIcons
          name='label'
          color={color}
          size={26}
          style={styles.labelIcon}
        />
        <ListItem.Content>
          <ListItem.Title style={styles.title}>{name}</ListItem.Title>
        </ListItem.Content>

        <Foundation
          name='pencil'
          color={'#818181'}
          size={26}
          style={styles.editIcon}
          onPress={onEditPress}
        />
      </ListItem>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelIcon: {
    marginLeft: 10,
  },
  listItem: {
    flex: 1,
  },
  title: {
    fontSize: 18,
  },
  editIcon: {
    marginRight: 12,
  },
});
