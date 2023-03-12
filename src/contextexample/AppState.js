import { createContext } from 'react';

const AppStateDefault = {
  stage: 'Default Logged in',
  AppName: 'Default My App',
};

const AppState = createContext(AppStateDefault);
export default AppState;
