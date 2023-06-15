import { createContext, useContext } from 'react';

interface IThemeState {
  toggleColorMode: () => void;
}

export const ColorModeContext = createContext<IThemeState>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleColorMode: () => {},
});

export const useToggleColorMode = () => {
  const { toggleColorMode } = useContext(ColorModeContext);

  return toggleColorMode;
};
