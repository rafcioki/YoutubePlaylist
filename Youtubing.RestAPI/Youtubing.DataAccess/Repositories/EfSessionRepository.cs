using System.Collections.Generic;
using System.Linq;
using Youtubing.RestAPI.Services.Exceptions;
using Youtubing.RestAPI.Services.Models;
using Youtubing.RestAPI.Services.Repositories;
using System.Data.Entity;

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

		public void AddNewVideoToSession(string sessionId, string videoUrl)
		{
			Session session = _context.Sessions.FirstOrDefault(s => s.Id == sessionId);

			if (session == null)
			{
				throw new SessionNotFoundException(sessionId);
			}

			var newVideo = new Video
			{
				Url = videoUrl
			};

			session.Videos.Add(newVideo);

			_context.SaveChanges();
		}

		public List<Video> GetSessionVideos(string sessionId)
		{
			Session session = _context.Sessions.Include(s => s.Videos).FirstOrDefault(s => s.Id == sessionId);

			if (session == null)
			{
				throw new SessionNotFoundException(sessionId);
			}

			return session.Videos;
		}
	}
}
