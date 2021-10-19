import React from 'react';
import { HTSProvider } from './src/context';
import App from './src/navigations';

const PersonalHealth = (props) => {
  return (
    <HTSProvider>
      <App {...props} />
    </HTSProvider>
  );
};

export default PersonalHealth;

export { initHTSConfig } from './src/configs';