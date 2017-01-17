import VideosModule from './videos'
import VideosController from './videos.controller';
import VideosComponent from './videos.component';
import VideosTemplate from './videos.html';

describe('Videos', () => {
  let $rootScope, makeController;

  beforeEach(window.module(VideosModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new VideosController();
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
      expect(VideosTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = VideosComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(VideosTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(VideosController);
      });
  });
});
