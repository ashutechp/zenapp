import { useContext } from 'react';
import AppStateContext from './AppState';

// eslint-disable-next-line react-hooks/rules-of-hooks
const WebMenu = () => {
  //const AppStateOb = useContext(AppState);
  const { AppState } = useContext(AppStateContext);
  return (
    <div>
      <h2>I am a Menu (WebMenu)</h2>
      AppName (WebMenu)= {AppState.AppName}
    </div>
  );
};

export default WebMenu;
