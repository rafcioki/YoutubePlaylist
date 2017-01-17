import angular from 'angular';
import uiRouter from 'angular-ui-router';
import sessionComponent from './session.component';

let sessionModule = angular.module('session', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('session', {
      url: '/:sessionId',
      component: 'session'
    });
})

.component('session', sessionComponent)

.name;

export default sessionModule;
