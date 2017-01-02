import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Home from './home/home';
import NewSession from './newSession/newSession';

let componentModule = angular.module('app.components', [
  uiRouter,
  Home
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');
})

.name;

export default componentModule;
