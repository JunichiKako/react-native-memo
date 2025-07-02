import { router } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function LabelCreateScreen() {
  const handleCreatePress = () => {
    router.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ラベル作成</Text>
      <Button title='作成' onPress={handleCreatePress} />
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
