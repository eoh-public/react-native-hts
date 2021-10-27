import { HTSConfig } from './index';

const API = {
  TEST: () => HTSConfig.apiRoot + '/test',
  UNITS: {
    LIST: () => HTSConfig.apiRoot + '/api/hts/units/',
  },
};

export default API;
