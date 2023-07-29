import { createContext, useContext } from 'react';

interface IThemeState {
  toggleColorMode: () => void;
}

export const ColorModeContext = createContext<IThemeState>({
  toggleColorMode: () => {},
});

export const useToggleColorMode = () => {
  const { toggleColorMode } = useContext(ColorModeContext);

  return toggleColorMode;
};
