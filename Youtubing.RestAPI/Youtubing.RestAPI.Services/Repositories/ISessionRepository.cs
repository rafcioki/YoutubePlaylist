using System.Collections.Generic;
using Youtubing.RestAPI.Services.Models;

namespace Youtubing.RestAPI.Services.Repositories
{
	public interface ISessionRepository
	{
		string CreateSession(string id);
		void AddNewVideoToSession(string sessionId, string videoURl);
		List<Video> GetSessionVideos(string sessionId);
	}
}
