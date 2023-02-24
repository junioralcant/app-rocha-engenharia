import React from 'react';
// import codePush from 'react-native-code-push';
import * as Sentry from '@sentry/react-native';

import Routes from './routes';

Sentry.init({
  dsn: 'https://7d47350b28e84f77975c710cfbff36c6@o264008.ingest.sentry.io/6707109',
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
});
export default function App() {
  return <Routes />;
}
