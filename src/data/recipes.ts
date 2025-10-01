import { Recipe } from '@/types/recipe';

export const recipes: Recipe[] = [
  {
    id: 'waakye-basic',
    title: 'Waakye',
    region: ['Greater Accra', 'Northern Influence'],
    categories: ['rice-and-beans', 'street-food'],
    ingredients: [
      { name: 'rice', qty: 300, unit: 'g' },
      { name: 'black-eyed beans', qty: 200, unit: 'g' },
      { name: 'millet leaves', qty: 5, unit: 'leaves', subs: ['baking soda (pinch)'] },
      { name: 'salt', qty: 1, unit: 'tsp' }
    ],
    steps: [
      { id: 1, text: 'Soak beans 2–4 hours.' },
      { id: 2, text: 'Boil beans until almost tender.', timerSec: 1800 },
      { id: 3, text: 'Add rice, millet leaves; simmer until rice is cooked.', timerSec: 1200 },
      { id: 4, text: 'Season with salt. Rest 5 minutes.', timerSec: 300 }
    ],
    nutrition: { kcal: 520, protein_g: 16, fat_g: 8, carb_g: 95, sodium_mg: 420 },
    dietTags: ['vegetarian', 'halal'],
    allergens: ['legume'],
    difficulty: 'medium',
    prepMin: 20,
    cookMin: 45,
    servings: 4,
    authenticity: { badge: 'Region Authentic', verifiedBy: 'Elder Ama' }
  },
  {
    id: 'kelewele-light',
    title: 'Kelewele (Light)',
    region: ['Greater Accra'],
    categories: ['street-food', 'snack'],
    ingredients: [
      { name: 'ripe plantains', qty: 4 },
      { name: 'fresh ginger', qty: 1, unit: 'tbsp' },
      { name: 'garlic', qty: 1, unit: 'tsp' },
      { name: 'cayenne or chili', qty: 1, unit: 'tsp' },
      { name: 'salt', qty: 0.5, unit: 'tsp' },
      { name: 'oil (for frying or air-frying)' }
    ],
    steps: [
      { id: 1, text: 'Mix ginger, garlic, chili, salt.' },
      { id: 2, text: 'Toss plantain cubes in spice mix.' },
      { id: 3, text: 'Fry or air-fry until golden.', timerSec: 900 }
    ],
    nutrition: { kcal: 300, protein_g: 2, fat_g: 10, carb_g: 52 },
    dietTags: ['vegan', 'halal'],
    difficulty: 'easy',
    prepMin: 10,
    cookMin: 15,
    servings: 4
  },
  {
    id: 'groundnut-soup',
    title: 'Groundnut Soup',
    region: ['Ashanti', 'Northern'],
    categories: ['soup', 'stew'],
    ingredients: [
      { name: 'roasted peanut paste', qty: 250, unit: 'g' },
      { name: 'tomatoes', qty: 3 },
      { name: 'onion', qty: 1 },
      { name: 'chili pepper', qty: 1 },
      { name: 'chicken or goat', qty: 600, unit: 'g', subs: ['mushroom/tofu for vegan'] },
      { name: 'salt', qty: 1, unit: 'tsp' }
    ],
    steps: [
      { id: 1, text: 'Blend tomatoes, onion, chili.' },
      { id: 2, text: 'Simmer meat with salt until tender.', timerSec: 1800 },
      { id: 3, text: 'Whisk peanut paste with water; add gradually; simmer.', timerSec: 1800 }
    ],
    dietTags: ['halal'],
    allergens: ['peanut'],
    difficulty: 'medium',
    prepMin: 15,
    cookMin: 45,
    servings: 6
  }
];