import { MaterialIcons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

type LabelTagProps = {
  color: string;
  name: string;
};

export default function LabelTag({ color, name }: LabelTagProps) {
  return (
    <View
      style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 2 }}
    >
      <MaterialIcons name='label' size={24} color={color} />
      <Text style={{ marginLeft: 5 }}>{name}</Text>
    </View>
  );
}
