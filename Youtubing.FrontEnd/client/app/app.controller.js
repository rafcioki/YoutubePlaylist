class AppController {
    constructor(AppSettings) {
        "ngInject";

        this.appName = AppSettings.appName;
        this.githubUrl = AppSettings.githubUrl;
    }
}

export default AppController;