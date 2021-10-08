import React from "react";
import { Appearance } from "react-native";

import { ThemeAction, ThemeContext, ThemeState } from "./type";
import { darkPalette, lightPalette } from "./Colors";

const ThemeContext1 = React.createContext<ThemeContext>(undefined);
ThemeContext1.displayName = "ThemeContext";

const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case "dark":
      return { colors: darkPalette, scheme: "dark" };
    case "light":
      return { colors: lightPalette, scheme: "light" };
    default:
      throw new Error(`Unhandled action type ${action.type}`);
  }
};

const ThemeProvider: React.FC = ({ children }) => {
  const lazyInitializer = (): ThemeState => {
    const scheme = Appearance.getColorScheme();
    if (scheme === "light") return { colors: lightPalette, scheme: "light" };
    return { colors: darkPalette, scheme: "dark" };
  };

  const [state, dispatch] = React.useReducer(
    themeReducer,
    undefined,
    lazyInitializer
  );
  const value: ThemeContext = [state, dispatch];

  return (
    <ThemeContext1.Provider value={value}>{children}</ThemeContext1.Provider>
  );
};

const useTheme = () => {
  const context = React.useContext(ThemeContext1);
  if (context === undefined) {
    throw new Error("`useTheme` must use within a `ThemeProvider`");
  }
  return context;
};

export { ThemeProvider, useTheme };
