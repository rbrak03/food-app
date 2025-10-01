import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '@/navigation';
import { recipes } from '@/data/recipes';
import { appTheme } from '@/theme';

export default function GuidedModeScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'Guided'>>();
  const recipe = recipes.find(r => r.id === route.params.id);
  const [stepIndex, setStepIndex] = React.useState(0);
  const [secondsLeft, setSecondsLeft] = React.useState<number | null>(null);

  React.useEffect(() => {
    setSecondsLeft(recipe?.steps[stepIndex]?.timerSec ?? null);
  }, [stepIndex, recipe]);

  React.useEffect(() => {
    if (secondsLeft == null) return;
    if (secondsLeft <= 0) return;
    const t = setInterval(() => setSecondsLeft(s => (s == null ? s : s - 1)), 1000);
    return () => clearInterval(t);
  }, [secondsLeft]);

  if (!recipe) return <View style={styles.container}><Text>Recipe not found</Text></View>;
  const step = recipe.steps[stepIndex];

  const next = () => setStepIndex(i => Math.min(i + 1, recipe.steps.length - 1));
  const prev = () => setStepIndex(i => Math.max(i - 1, 0));

  const minutes = secondsLeft != null ? Math.floor(secondsLeft / 60) : null;
  const seconds = secondsLeft != null ? secondsLeft % 60 : null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{recipe.title} — Step {step.id}/{recipe.steps.length}</Text>
      <Text style={styles.step}>{step.text}</Text>
      {secondsLeft != null && (
        <Text style={styles.timer}>
          {minutes}:{String(seconds).padStart(2, '0')}
        </Text>
      )}
      <View style={styles.actions}>
        <TouchableOpacity onPress={prev} style={[styles.button, { backgroundColor: '#ddd' }]}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={next} style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16, justifyContent: 'center' },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 12, textAlign: 'center' },
  step: { fontSize: 18, marginBottom: 12, textAlign: 'center' },
  timer: { fontSize: 32, fontWeight: '700', color: appTheme.colors.accent, marginBottom: 20, textAlign: 'center' },
  actions: { flexDirection: 'row', justifyContent: 'space-between' },
  button: { backgroundColor: appTheme.colors.primary, padding: 12, borderRadius: 10, flex: 1, marginHorizontal: 6, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: '600' }
});