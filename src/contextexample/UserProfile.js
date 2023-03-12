import { useContext } from 'react';
import AppStateContext from './AppState';
const UserProfile = () => {
  const { AppState, setAppState } = useContext(AppStateContext);
  //const AppStateOb = useContext(AppStateContext);
  const modifyAppName = () => {
    setAppState({
      stage: 'Logged in',
      AppName: 'My App Modified',
    });
  };
  return (
    <div>
      {' '}
      <span>AppName UserProfile = {AppState.AppName}</span>
      <button onClick={modifyAppName}>Modify App Name(UserProfile)</button>
    </div>
  );
};

export default UserProfile;
