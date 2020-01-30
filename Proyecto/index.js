/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import login from './components/Login';
import register from './components/Register';
import splash from './components/Splash';
import inicio from './components/Inicio';

AppRegistry.registerComponent(appName, () => App);
