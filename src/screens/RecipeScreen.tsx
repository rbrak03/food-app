import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { recipes } from '@/data/recipes';
import { RootStackParamList } from '@/navigation';
import { useApp } from '@/context/AppContext';
import { appTheme } from '@/theme';

export default function RecipeScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'Recipe'>>();
  const nav = useNavigation<any>();
  const { dispatch } = useApp();
  const recipe = recipes.find(r => r.id === route.params.id);

  if (!recipe) return <View style={styles.container}><Text>Recipe not found</Text></View>;

  const addToMarket = () => {
    const items = recipe.ingredients.map((ing, idx) => ({
      id: `${recipe.id}-${idx}`,
      name: ing.name,
      qty: ing.qty ? `${ing.qty}${ing.unit ? ' ' + ing.unit : ''}` : ''
    }));
    dispatch({ type: 'ADD_MARKET_ITEMS', items });
    nav.navigate('Tabs', { screen: 'Market' });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <Text style={styles.title}>{recipe.title}</Text>
      <Text style={styles.meta}>{recipe.region.join(' • ')} • {recipe.categories.join(' • ')}</Text>

      <Text style={styles.section}>Ingredients</Text>
      <FlatList
        data={recipe.ingredients}
        keyExtractor={(item, i) => `${item.name}-${i}`}
        renderItem={({ item }) => (
          <View style={styles.row}><Text>- {item.name}{item.qty ? `: ${item.qty}${item.unit ? ' ' + item.unit : ''}` : ''}</Text></View>
        )}
        scrollEnabled={false}
      />

      <Text style={styles.section}>Steps</Text>
      <FlatList
        data={recipe.steps}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.row}><Text>{item.id}. {item.text}{item.timerSec ? ` (${Math.round(item.timerSec/60)} min)` : ''}</Text></View>
        )}
        scrollEnabled={false}
      />

      <View style={{ height: 12 }} />
      <TouchableOpacity style={styles.button} onPress={() => nav.navigate('Guided', { id: recipe.id })}>
        <Text style={styles.buttonText}>Start Guided Mode</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: appTheme.colors.secondary }]} onPress={addToMarket}>
        <Text style={styles.buttonText}>Add to Market List</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 4 },
  meta: { color: appTheme.colors.muted, marginBottom: 16 },
  section: { fontSize: 18, fontWeight: '600', marginTop: 8, marginBottom: 8 },
  row: { paddingVertical: 6 },
  button: { backgroundColor: appTheme.colors.primary, padding: 12, borderRadius: 10, marginBottom: 10, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: '600' }
});