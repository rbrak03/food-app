import React, { createContext, useContext, useMemo, useReducer } from 'react';

export type MarketItem = { id: string; name: string; qty: string; checked?: boolean };
export type Preferences = { language: 'en' | 'tw' | 'ga' | 'ewe'; diet: Array<'vegetarian' | 'vegan' | 'pescatarian' | 'halal' | 'low_sodium' | 'low_oil'> };

export type AppState = {
  marketList: MarketItem[];
  preferences: Preferences;
};

type Action =
  | { type: 'ADD_MARKET_ITEMS'; items: MarketItem[] }
  | { type: 'TOGGLE_MARKET_ITEM'; id: string }
  | { type: 'CLEAR_MARKET' }
  | { type: 'SET_PREFERENCES'; preferences: Partial<Preferences> };

const initialState: AppState = {
  marketList: [],
  preferences: { language: 'en', diet: [] },
};

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'ADD_MARKET_ITEMS': {
      const existingByName = new Map(state.marketList.map(i => [i.name.toLowerCase(), i]));
      const merged: MarketItem[] = [...state.marketList];
      for (const item of action.items) {
        const key = item.name.toLowerCase();
        if (existingByName.has(key)) {
          merged.push({ ...item, id: item.id + ':' + Math.random().toString(36).slice(2, 8) });
        } else {
          merged.push(item);
        }
      }
      return { ...state, marketList: merged };
    }
    case 'TOGGLE_MARKET_ITEM':
      return { ...state, marketList: state.marketList.map(i => (i.id === action.id ? { ...i, checked: !i.checked } : i)) };
    case 'CLEAR_MARKET':
      return { ...state, marketList: [] };
    case 'SET_PREFERENCES':
      return { ...state, preferences: { ...state.preferences, ...action.preferences } };
    default:
      return state;
  }
}

const AppCtx = createContext<{ state: AppState; dispatch: React.Dispatch<Action> } | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state]);
  return <AppCtx.Provider value={value}>{children}</AppCtx.Provider>;
}

export function useApp() {
  const ctx = useContext(AppCtx);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}