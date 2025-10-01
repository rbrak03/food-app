import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@/screens/HomeScreen';
import CookScreen from '@/screens/CookScreen';
import RecipeScreen from '@/screens/RecipeScreen';
import GuidedModeScreen from '@/screens/GuidedModeScreen';
import MarketScreen from '@/screens/MarketScreen';
import CultureScreen from '@/screens/CultureScreen';
import ProfileScreen from '@/screens/ProfileScreen';

export type RootStackParamList = {
  Tabs: undefined;
  Recipe: { id: string };
  Guided: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cook" component={CookScreen} />
      <Tab.Screen name="Market" component={MarketScreen} />
      <Tab.Screen name="Culture" component={CultureScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
      <Stack.Screen name="Recipe" component={RecipeScreen} options={{ title: 'Recipe' }} />
      <Stack.Screen name="Guided" component={GuidedModeScreen} options={{ title: 'Guided Mode' }} />
    </Stack.Navigator>
  );
}