import angular from 'angular';
import uiRouter from 'angular-ui-router';
import videosComponent from './videos.component';

let videosModule = angular.module('videos', [
  uiRouter
])

.component('videos', videosComponent)

.name;

export default videosModule;
