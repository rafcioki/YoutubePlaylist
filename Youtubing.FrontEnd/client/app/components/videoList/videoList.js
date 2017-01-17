import angular from 'angular';
import uiRouter from 'angular-ui-router';
import videoListComponent from './videoList.component';

let videoListModule = angular.module('videoList', [
  uiRouter
])

.component('videoList', videoListComponent)

.name;

export default videoListModule;
