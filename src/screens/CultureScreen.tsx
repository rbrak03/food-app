import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CultureScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Culture</Text>
      <Text style={styles.body}>Explore Ghana's regional dishes, festivals, and stories. Interactive map and ingredient encyclopedia coming soon.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 8 },
  body: { fontSize: 16 }
});