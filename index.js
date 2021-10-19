import React from 'react';
import { HTSProvider } from './src/context';
import App from './src/navigations';

const HTS = (props) => {
  return (
    <HTSProvider>
      <App {...props} />
    </HTSProvider>
  );
};

export default HTS;

export { initHTSConfig } from './src/configs';