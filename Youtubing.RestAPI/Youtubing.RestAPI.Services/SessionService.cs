using Youtubing.Core;
using Youtubing.DataAccess.Exceptions;
using Youtubing.RestAPI.Services.Repositories;

namespace Youtubing.RestAPI.Services
{
    public class SessionService
    {
	    private const int SessionIdLength = 5;

	    public readonly ISessionRepository _sessionRepository;
	    public readonly IRandomIdGenerator _randomIdGenerator;

	    public SessionService(ISessionRepository sessionRepository, IRandomIdGenerator randomIdGenerator)
	    {
		    _sessionRepository = sessionRepository;
		    _randomIdGenerator = randomIdGenerator;
	    }

	    public string CreateSession()
	    {
			string randomId = _randomIdGenerator.Generate(SessionIdLength);
			string createdSessionId;

			if (TryToAddSessionWithId(randomId, out createdSessionId))
			{
				return createdSessionId;    
			}

			return CreateSession();
	    }

	    private bool TryToAddSessionWithId(string randomId, out string result)
	    {
		    try
		    {
			    result = _sessionRepository.CreateSession(randomId);
		    }
		    catch (AlreadyExistsException)
		    {
			    result = string.Empty;
			    return false;
		    }

		    return true;
	    }
    }
}
