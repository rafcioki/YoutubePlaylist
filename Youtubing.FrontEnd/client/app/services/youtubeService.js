const YoutubeService = ($http, AppSettings) => {
    "ngInject";
    let getVideoDetails = (videoId) => {
        return $http.get(AppSettings.youtubeListVideosEndpoint, { 
            params: { 
                part: 'snippet, player, contentDetails', 
                id: videoId,
                key: AppSettings.youtubeSecret
            } 
        }).then(data => {
            return _extractDetailsFromVideo(data);
        });
    };

    let _extractDetailsFromVideo = (data) => {
       // todo: handle a scenario when video has incorrect data or 
       // wasn't found

       let videoData = data.data.items[0];

        return {
            player: videoData.player.embedHtml,
            title: videoData.snippet.title,
            duration: videoData.contentDetails.duration
        };
    };

    return { getVideoDetails };
};

export default YoutubeService;