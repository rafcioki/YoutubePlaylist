import SessionModule from './session'
import SessionController from './session.controller';
import SessionComponent from './session.component';
import SessionTemplate from './session.html';

describe('Session', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SessionModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SessionController();
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
      expect(SessionTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SessionComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SessionTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SessionController);
      });
  });
});
