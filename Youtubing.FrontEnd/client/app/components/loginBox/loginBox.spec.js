import LoginBoxModule from './loginBox'
import LoginBoxController from './loginBox.controller';
import LoginBoxComponent from './loginBox.component';
import LoginBoxTemplate from './loginBox.html';

describe('LoginBox', () => {
  let $rootScope, makeController;

  beforeEach(window.module(LoginBoxModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new LoginBoxController();
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
      expect(LoginBoxTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = LoginBoxComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(LoginBoxTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(LoginBoxController);
      });
  });
});
