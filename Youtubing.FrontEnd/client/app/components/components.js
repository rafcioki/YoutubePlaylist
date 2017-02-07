import angular from 'angular';
import NewSession from './newSession/newSession';
import Session from './session/session';
import Videos from './videos/videos';
import VideoList from './videoList/videoList';
import AddVideo from './addVideo/addVideo';
import LoginBox from './loginBox/loginBox';

let componentModule = angular.module('app.components', [
  NewSession,
  Session,
  Videos,
  VideoList,
  AddVideo,
  LoginBox
])

.name;

export default componentModule;
