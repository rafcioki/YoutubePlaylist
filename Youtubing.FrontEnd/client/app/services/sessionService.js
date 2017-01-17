const SessionService = ($http) => {
    let createSession = () => {
        return $http.post('http://localhost:57113/api/Session/CreateSession');
    };

    let addVideoToSession = (sessionId, videoUrl) => {
        return $http.post('http://localhost:57113/api/Session/AddNewVideo', 
            { 'sessionId' : sessionId, 'videoUrl': videoUrl });
    };

    let getSessionVideos = (sessionId) => {
        return $http.get('http://localhost:57113/api/Session/GetSessionVideos', { params: { 'sessionId': sessionId }});
    };

    return { createSession, addVideoToSession, getSessionVideos };
};

SessionService.$inject = ['$http'];

export default SessionService;