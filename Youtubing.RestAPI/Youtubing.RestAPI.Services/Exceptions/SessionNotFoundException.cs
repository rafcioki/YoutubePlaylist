using System;

namespace Youtubing.RestAPI.Services.Exceptions
{
	public class SessionNotFoundException : Exception
	{
		public SessionNotFoundException(string sessionId) : base($"Session with id {sessionId} doesn't exist in the database.")
		{
			SessionId = sessionId;
		}

		public string SessionId { get; set; }
	}
}
