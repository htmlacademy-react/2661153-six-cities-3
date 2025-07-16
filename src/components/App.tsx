import React, { FC } from 'react';
import MainPage from './MainPage';

type AppProps = {
  offersCount: number;
};

const App: FC<AppProps> = ({ offersCount }) => (
  <MainPage offersCount={offersCount} />
);

export default App;
