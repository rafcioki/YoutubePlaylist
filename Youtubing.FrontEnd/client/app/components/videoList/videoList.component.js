import template from './videoList.html';
import controller from './videoList.controller';
import './videoList.scss';

let videoListComponent = {
  restrict: 'E',
  bindings: {
    videos: '<'
  },
  template,
  controller
};

export default videoListComponent;
