import angular from 'angular';
import uiRouter from 'angular-ui-router';
import newSessionComponent from './newSession.component';

let newSessionModule = angular.module('newSession', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('newSession', {
      url: '/newSession',
      component: 'newSession'
    });
})

.component('newSession', newSessionComponent)

.name;

export default newSessionModule;
