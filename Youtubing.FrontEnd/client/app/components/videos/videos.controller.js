class VideosController {
  constructor($stateParams, SessionService) {
    "ngInject";

    this.name = 'videos';
    this.SessionService = SessionService;

    this.sessionId = $stateParams.sessionId;

    this.addVideo = (video) => this._addNewVideo(video);
  }

  $onInit() {
      this._loadVideos();
  }

  _addNewVideo(video) {
    this.SessionService.addVideoToSession(this.sessionId, video.url)
      .then(function(data) {
        this._loadVideos();
      }.bind(this))
      .catch(function(ex) {
        console.log('something went wrong');
      });
  }

  _loadVideos() {
      this.SessionService.getSessionVideos(this.sessionId)
        .then(function(data) {
          this.videos = data.data;
        }
        .bind(this))
        .catch(function(ex) {
          console.log("Something went wrong");
        });
  }
}

export default VideosController;
