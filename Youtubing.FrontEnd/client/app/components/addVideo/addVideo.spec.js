import AddVideoModule from './addVideo'
import AddVideoController from './addVideo.controller';
import AddVideoComponent from './addVideo.component';
import AddVideoTemplate from './addVideo.html';

describe('AddVideo', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AddVideoModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AddVideoController();
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
      expect(AddVideoTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = AddVideoComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(AddVideoTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(AddVideoController);
      });
  });
});
