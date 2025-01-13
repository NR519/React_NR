import React, { createContext, useContext, useState, ReactNode } from 'react';

const themes = {
  light: {
    backgroundColor: '#ffffff',
    textColor: '#000000',
    headingColor: '#333333',
  },
  dark: {
    backgroundColor: '#000000',
    textColor: 'grey',
    headingColor: '#dddddd',
  },
  custom: {
    backgroundColor: '#f0e68c',
    textColor: '#8b0000',
    headingColor: '#ff4500',
  },
};

type ThemeType = keyof typeof themes;

const ThemeContext = createContext({
  theme: themes.light,
  currentTheme: 'light' as ThemeType,
  toggleTheme: (theme: ThemeType) => {},
});

export const useTheme = () => useContext(ThemeContext);

export default function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('light');

  const toggleTheme = (theme: ThemeType) => {
    setCurrentTheme(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: themes[currentTheme],
        currentTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
