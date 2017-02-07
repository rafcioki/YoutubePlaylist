class VideosController {
  constructor($stateParams, SessionService, YoutubeService) {
    "ngInject";

    this.name = 'videos';
    this.SessionService = SessionService;
    this.YoutubeService = YoutubeService;

    this.sessionId = $stateParams.sessionId;

    this.addVideo = (video) => this._addNewVideo(video);
  }

  $onInit() {
      this._loadSessionVideos();
  }

  _addNewVideo(video) {
    this.SessionService.addVideoToSession(this.sessionId, video.url)
      .then(function(data) {
        this._loadSessionVideos();
      }.bind(this))
      .catch(function(ex) {
        console.log(ex);
      });
  }

  _loadSessionVideos() {
      this.SessionService.getSessionVideos(this.sessionId)
        .then(function(data) {
          return this._loadVideoDetailsFromYoutube(data.data);
        }.bind(this))
        .then(function(videosWithDetails) {
          console.log(videosWithDetails);
          this.videos = videosWithDetails;
        }.bind(this))
        .catch(function(ex) {
          console.log(ex);
        });
  }

  _loadVideoDetailsFromYoutube(videos) {
    return Promise.all(videos.map(video => {
        var videoId = this.YoutubeService.extractVideoId(video.Url).id;
        console.log(videoId);
        return this.YoutubeService.getVideoDetails(videoId)
          .then(function(videoDetails){
            return {
              url: video.Url,
              details: videoDetails
            };
          });
    }));
  }
}

export default VideosController;
