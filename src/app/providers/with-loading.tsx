import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import { ScreenLoader } from '@/shared/ui';

const LoadingWrapper: FC<PropsWithChildren> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 600);
  }, []);

  return (
    <Stack>
      {isLoading && <ScreenLoader />}

      {children}
    </Stack>
  );
};

export default LoadingWrapper;
