class NewSessionController {
  constructor(SessionService, $state) {
    "ngInject";

    this.name = 'newSession';
    this.SessionService = SessionService;
    this.$state = $state;
  }

  $onInit() {
    this.startNewSession = () => {
      this.SessionService.createSession()
        .then(function(createdSessionId) {
          this.$state.go('session', {'sessionId': createdSessionId.data});
        }
        .bind(this))
        .catch(function(ex){
          console.log("Something went wrong");
        });
    };
  }
}

export default NewSessionController;
