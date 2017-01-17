using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Youtubing.RestAPI.Services;
using Youtubing.ViewModels;

namespace Youtubing.RestAPI.Controllers
{
	[RoutePrefix("api/Session")]
    public class SessionController : ApiController
    {
	    private readonly SessionService _sessionService;

	    public SessionController(SessionService sessionService)
	    {
		    _sessionService = sessionService;
	    }

		[Route("CreateSession")]
	    [HttpPost]
	    public string CreateSession()
		{
			return _sessionService.CreateSession();
		}

	    [Route("AddNewVideo")]
	    [HttpPost]
	    public HttpResponseMessage AddNewVideo([FromBody]NewVideoViewModel newVideo)
	    {
		    _sessionService.AddNewVideoToSession(newVideo.SessionId, newVideo.VideoUrl);

			return new HttpResponseMessage(HttpStatusCode.OK);
	    }

	    [Route("GetSessionVideos")]
	    [HttpGet]
	    public HttpResponseMessage GetSessionVideos([FromUri] string sessionId)
	    {
		    List<VideoViewModel> videos = _sessionService.GetSessionVideos(sessionId).Select(v => new VideoViewModel
		    {
			    // todo: introduce AutoMapper
			    Url = v.Url
		    }).ToList();

			return Request.CreateResponse<List<VideoViewModel>>(HttpStatusCode.OK, videos);
		}
    }
}
