import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, rawSetTheme] = useState('general');

  // Callback to set theme and persist it
  const setTheme = useCallback((newTheme) => {
    rawSetTheme(newTheme);
  }, []);
  
  // Effect to apply the theme class to the body
  useEffect(() => {
    const body = document.body;
    const themes = ['general', 'pediatrics', 'cardiology', 'dermatology', 'emergency'];
    
    // Clean up old theme classes
    body.classList.remove(...themes.map(t => `theme-${t}`));
    
    // Add new theme class
    body.classList.add(`theme-${theme}`);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
