using System.Web.Http;
using Youtubing.RestAPI.Services;

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
    }
}
