import { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from './providers';
import LoadingWrapper from './providers/with-loading';

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider>
      <LoadingWrapper>{children}</LoadingWrapper>
    </ThemeProvider>
  );
};

export default AppProvider;
