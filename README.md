# Akwaaba Kitchen (Expo React Native)

A vibrant, offline-friendly mobile app celebrating Ghanaian cuisine with guided cooking, market lists, and cultural context.

## Features (MVP)
- Home and Cook discovery with search and diet filter
- Recipe detail with ingredients and steps
- Guided Mode stepper with per-step timers
- Market List: add ingredients from a recipe, check off items, clear list
- Culture and Profile placeholder screens

## Tech
- Expo + React Native (TypeScript)
- React Navigation (bottom tabs + stack)
- Simple in-memory context for market list and preferences

## Getting Started
1. Install dependencies:
```bash
npm install
```
2. Start the app:
```bash
npm run start
```
3. Open on device:
- Press "a" for Android emulator, or scan the QR with Expo Go.

## Project Structure
- `App.tsx`: App entry, providers, navigation container
- `src/navigation`: Tabs + stack
- `src/screens`: Home, Cook, Recipe, Guided, Market, Culture, Profile
- `src/data`: Sample recipes
- `src/types`: TypeScript types
- `src/context`: App context (market list, preferences)
- `src/theme`: Colors and typography

## Next Steps
- Localization (English, Twi, Ga, Ewe) and audio packs
- Ingredient encyclopedia and regional food map
- Advanced health filters and nutrition
- Community contributions with moderation and badges
