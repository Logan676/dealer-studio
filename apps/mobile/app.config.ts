import 'dotenv/config';
import { ExpoConfig } from 'expo/config';

const config: ExpoConfig = {
  name: 'Dealer Studio',
  slug: 'dealer-studio',
  scheme: 'dealerstudio',
  ios: {
    bundleIdentifier: 'com.dealerstudio',
    supportsTablet: true
  },
  android: {
    package: 'com.dealerstudio'
  },
  extra: {
    API_BASE_URL: process.env.API_BASE_URL ?? ''
  }
};

export default config;
