using System.Data.Entity;
using Youtubing.RestAPI.Services.Models;

namespace Youtubing.DataAccess
{
    public class YoutubingDataContext : DbContext
    {
	    public YoutubingDataContext() : base("YoutubingDataContext")
	    {
		    Configuration.LazyLoadingEnabled = true;
		    Database.SetInitializer(new DropCreateDatabaseIfModelChanges<YoutubingDataContext>());
	    }
			 
		public DbSet<Session> Sessions { get; set; }

	    public static YoutubingDataContext Create()
	    {
		    return new YoutubingDataContext();
	    }
    }
}
