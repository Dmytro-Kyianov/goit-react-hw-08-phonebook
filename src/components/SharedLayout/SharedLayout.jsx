import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppTool } from 'components/AppTool/AppTool';
import { Spinner } from 'components/Loader/Loader';

import { MainBox } from './SharedLayot.styled';

const SharedLayout = () => {
  return (
    <MainBox>
      <nav>
      <AppTool />
      </nav>
      <main>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
      </main>
    </MainBox>
  );
};

export default SharedLayout;