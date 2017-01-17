class SessionController {
  constructor($stateParams) {
    "ngInject";

    console.log($stateParams);

    this.name = 'session';
    this.sessionId = $stateParams.sessionId;
  }
}

export default SessionController;
