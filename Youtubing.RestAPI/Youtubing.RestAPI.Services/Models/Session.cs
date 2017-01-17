using System.Collections.Generic;

namespace Youtubing.RestAPI.Services.Models
{
	public class Session
	{
		public Session()
		{
			Videos = new List<Video>();
		}

		public string Id { get; set; }

		public List<Video> Videos { get; set; }
	}
}
