import VideoListModule from './videoList'
import VideoListController from './videoList.controller';
import VideoListComponent from './videoList.component';
import VideoListTemplate from './videoList.html';

describe('VideoList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(VideoListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new VideoListController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(VideoListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = VideoListComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(VideoListTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(VideoListController);
      });
  });
});
