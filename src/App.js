import React, {useEffect} from 'react';
import codePush from 'react-native-code-push';

import Routes from './routes';

function App() {
  useEffect(() => {
    codePush.sync({
      installMode: codePush.InstallMode.IMMEDIATE,
    });
  }, []);

  return <Routes />;
}

export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
})(App);
