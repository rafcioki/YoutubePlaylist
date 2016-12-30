using System.Data.Entity;

namespace Youtubing.ClassLibrary.Context
{
	public class YoutubingContext : DbContext
	{
		public YoutubingContext() : base("YoutubingContext")
		{
			Database.SetInitializer(new CreateDatabaseIfNotExists<YoutubingContext>());
		}

		public static YoutubingContext Create()
		{
			return new YoutubingContext();
		}
	}
}
