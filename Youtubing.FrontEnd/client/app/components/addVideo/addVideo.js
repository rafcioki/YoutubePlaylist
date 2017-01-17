import angular from 'angular';
import uiRouter from 'angular-ui-router';
import addVideoComponent from './addVideo.component';

let addVideoModule = angular.module('addVideo', [
  uiRouter
])

.component('addVideo', addVideoComponent)

.name;

export default addVideoModule;
