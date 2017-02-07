import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginBoxComponent from './loginBox.component';

let loginBoxModule = angular.module('loginBox', [
  uiRouter
])

.component('loginBox', loginBoxComponent)

.name;

export default loginBoxModule;
