import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useApp } from '@/context/AppContext';
import { appTheme } from '@/theme';

export default function MarketScreen() {
  const { state, dispatch } = useApp();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Market List</Text>
      <FlatList
        data={state.marketList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={[styles.row, item.checked && styles.rowChecked]} onPress={() => dispatch({ type: 'TOGGLE_MARKET_ITEM', id: item.id })}>
            <Text style={[styles.name, item.checked && styles.checked]}>{item.name}</Text>
            {item.qty ? <Text style={[styles.qty, item.checked && styles.checked]}>{item.qty}</Text> : null}
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={{ color: appTheme.colors.muted }}>Your list is empty</Text>}
      />
      <TouchableOpacity style={styles.clear} onPress={() => dispatch({ type: 'CLEAR_MARKET' })}>
        <Text style={styles.clearText}>Clear List</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  heading: { fontSize: 24, fontWeight: '700', marginBottom: 12 },
  row: { padding: 12, borderWidth: 1, borderColor: '#eee', borderRadius: 10, marginBottom: 8, flexDirection: 'row', justifyContent: 'space-between' },
  rowChecked: { backgroundColor: '#f0f0f0' },
  name: { fontSize: 16, fontWeight: '600' },
  qty: { color: appTheme.colors.muted },
  checked: { textDecorationLine: 'line-through', color: appTheme.colors.muted },
  clear: { padding: 12, backgroundColor: appTheme.colors.secondary, borderRadius: 10, alignItems: 'center', marginTop: 8 },
  clearText: { color: '#fff', fontWeight: '600' }
});