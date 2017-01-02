import angular from 'angular';
import uiRouter from 'angular-ui-router';
import newSessionComponent from './newSession.component';

let newSessionModule = angular.module('newSession', [
  uiRouter
])

.component('newSession', newSessionComponent)

.name;

export default newSessionModule;
