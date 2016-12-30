using Youtubing.RestAPI.Services.Models;
using Youtubing.RestAPI.Services.Repositories;

namespace Youtubing.DataAccess.Repositories
{
	public class EfSessionRepository : ISessionRepository
	{
		private readonly YoutubingDataContext _context;

		public EfSessionRepository(YoutubingDataContext context)
		{
			_context = context;
		}

		public string CreateSession(string id)
		{
			Session createdSession = _context.Sessions.Add(new Session
			{
				Id = id
			});

			_context.SaveChanges();

			return createdSession.Id;
		}
	}
}
