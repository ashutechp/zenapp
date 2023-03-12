import React, { useState } from 'react';
import WebMenu from './WebMenu';
import AppStateContext from './AppState';
import UserProfile from './UserProfile';
export const Blog = () => {
  const AppStateLive = {
    stage: 'Logged in',
    AppName: 'My App',
  };

  const [AppState, setAppState] = useState(AppStateLive);
  return (
    <div>
      <AppStateContext.Provider value={{ AppState, setAppState }}>
        <UserProfile />
        <WebMenu />
      </AppStateContext.Provider>
    </div>
  );
};
