import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Components from './components/components';
import AppComponent from './app.component';
import SessionService from './services/sessionService';
import YoutubeService from './services/youtubeService';
import AppSettings from './appSettings';

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';

angular.module('youtubing-app', [
    uiRouter,
    Components
  ])
  .config(($locationProvider, $stateProvider) => {
    "ngInject";

    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent)
  .factory('SessionService', SessionService)
  .factory('YoutubeService', YoutubeService)
  .factory('AppSettings', AppSettings);
