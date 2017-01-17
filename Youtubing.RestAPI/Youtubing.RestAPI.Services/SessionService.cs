using System.Collections.Generic;
using Youtubing.Core;
using Youtubing.RestAPI.Services.Exceptions;
using Youtubing.RestAPI.Services.Models;
using Youtubing.RestAPI.Services.Repositories;

namespace Youtubing.RestAPI.Services
{
	public class SessionService
	{
		private const int SessionIdLength = 5;

		private readonly ISessionRepository _sessionRepository;
		private readonly IRandomIdGenerator _randomIdGenerator;

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

		public void AddNewVideoToSession(string sessionId, string videoUrl)
		{
			_sessionRepository.AddNewVideoToSession(sessionId, videoUrl);
		}

		public List<Video> GetSessionVideos(string sessionId)
		{
			return _sessionRepository.GetSessionVideos(sessionId);
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
