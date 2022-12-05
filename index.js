/**
 * @format
 */
/* eslint-disable prettier/prettier */

import {AppRegistry} from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import LoginScreen from "./Screens/LoginScreen"
import HomeScreen from "./Screens/HomeScreen"

AppRegistry.registerComponent(appName, () => LoginScreen);
