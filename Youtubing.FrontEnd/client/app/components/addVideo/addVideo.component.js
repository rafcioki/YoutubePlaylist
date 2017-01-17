import template from './addVideo.html';
import controller from './addVideo.controller';
import './addVideo.scss';

let addVideoComponent = {
  restrict: 'E',
  bindings: {
    addVideoCallback: '&'
  },
  template,
  controller
};

export default addVideoComponent;
