const HTSDefaultConfig = {
  apiRoot: 'https://backend.eoh.io/api',
  googleMapApiKey: 'AIzaSyCF1Q-WFXCnfAHhOeXRF9WK7eT-TtxO9ss',
  stripePublishKey:
    'pk_test_51H2eNHDKEhTHCCCWkF3ZIL8bAd6J1DFNEUU9fuZgolNrbLP5lYVTb5DfWoiGLOI21dI0TZNQ7L2BkBVSKpZqyje100DN1MTlAO',
  pusherAppKey: '6e493d00ec2aa6b5276d',
  pusherAppCluster: 'ap1',
  maxSeconds: 900,
};

export class HTSConfig {
  static apiRoot = HTSDefaultConfig.apiRoot;
  static googleMapApiKey = HTSDefaultConfig.googleMapApiKey;
  static stripePublishKey = HTSDefaultConfig.stripePublishKey;
  static pusherAppKey = HTSDefaultConfig.pusherAppKey;
  static pusherAppCluster = HTSDefaultConfig.pusherAppCluster;
  static maxSeconds = HTSDefaultConfig.maxSeconds;
}

export const initHTSConfig = (config) => {
  HTSConfig.apiRoot = config.apiRoot ?? HTSDefaultConfig.apiRoot;
  HTSConfig.googleMapApiKey =
    config.googleMapApiKey ?? HTSDefaultConfig.googleMapApiKey;
  HTSConfig.stripePublishKey =
    config.stripePublishKey ?? HTSDefaultConfig.stripePublishKey;
  HTSConfig.pusherAppKey = config.pusherAppKey ?? HTSDefaultConfig.pusherAppKey;
  HTSConfig.pusherAppCluster =
    config.pusherAppCluster ?? HTSDefaultConfig.pusherAppCluster;
  HTSConfig.maxSeconds = config.maxSeconds ?? HTSDefaultConfig.maxSeconds;
};
