import React from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { recipes } from '@/data/recipes';
import { appTheme } from '@/theme';
import { useNavigation } from '@react-navigation/native';

export default function CookScreen() {
  const [query, setQuery] = React.useState('');
  const [diet, setDiet] = React.useState<string>('');
  const nav = useNavigation<any>();

  const filtered = recipes.filter(r =>
    r.title.toLowerCase().includes(query.toLowerCase()) &&
    (diet ? r.dietTags?.includes(diet) : true)
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cook</Text>
      <TextInput placeholder="Search" value={query} onChangeText={setQuery} style={styles.search} />
      <TextInput placeholder="Diet filter (e.g., vegan)" value={diet} onChangeText={setDiet} style={styles.search} />
      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => nav.navigate('Recipe', { id: item.id })}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.meta}>{item.difficulty ?? '—'} • {item.servings ?? '—'} servings</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  heading: { fontSize: appTheme.typography.heading, fontWeight: '700', marginBottom: 12 },
  search: {
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
  },
  card: { padding: 12, borderWidth: 1, borderColor: '#eee', borderRadius: 10, marginBottom: 10 },
  title: { fontSize: 18, fontWeight: '600', marginBottom: 4 },
  meta: { color: appTheme.colors.muted }
});