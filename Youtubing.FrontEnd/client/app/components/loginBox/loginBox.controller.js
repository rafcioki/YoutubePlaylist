class LoginBoxController {
  constructor() {
    this.name = 'loginBox';

    this.userLoggedIn = false;
  }

  logIn(user) {
    this.userLoggedIn = true;
    this.userName = user.name;
  }

  logOut(){
    this.userName = null;
    this.userLoggedIn = false;
  }
}

export default LoginBoxController;
