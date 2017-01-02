import NewSessionModule from './newSession'
import NewSessionController from './newSession.controller';
import NewSessionComponent from './newSession.component';
import NewSessionTemplate from './newSession.html';

describe('NewSession', () => {
  let $rootScope, makeController;

  beforeEach(window.module(NewSessionModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new NewSessionController();
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
      expect(NewSessionTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = NewSessionComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(NewSessionTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(NewSessionController);
      });
  });
});
