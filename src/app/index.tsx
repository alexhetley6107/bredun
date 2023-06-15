import { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from './providers';

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default AppProvider;
