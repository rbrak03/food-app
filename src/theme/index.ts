export const appTheme = {
  colors: {
    primary: '#B71C1C',
    secondary: '#2E7D32',
    accent: '#F9A825',
    background: '#FFFFFF',
    muted: '#6B7280',
    surface: '#F7F7F7'
  },
  spacing: (m: number) => 4 * m,
  typography: {
    heading: 28,
    subheading: 20,
    body: 16,
    small: 14
  },
  radius: {
    s: 6,
    m: 10,
    l: 16
  }
} as const;

export type AppTheme = typeof appTheme;