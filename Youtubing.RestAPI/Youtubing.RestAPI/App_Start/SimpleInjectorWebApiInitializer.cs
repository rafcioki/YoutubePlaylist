using System.Data.Entity;
using Youtubing.DataAccess;

[assembly: WebActivator.PostApplicationStartMethod(typeof(Youtubing.RestAPI.App_Start.SimpleInjectorWebApiInitializer), "Initialize")]

namespace Youtubing.RestAPI.App_Start
{
    using System.Web.Http;
    using SimpleInjector;
    using SimpleInjector.Integration.WebApi;
	using Youtubing.Core;
	using Youtubing.DataAccess.Repositories;
	using Youtubing.RestAPI.Services;
	using Youtubing.RestAPI.Services.Repositories;

	public static class SimpleInjectorWebApiInitializer
    {
        /// <summary>Initialize the container and register it as Web API Dependency Resolver.</summary>
        public static void Initialize()
        {
            var container = new Container();
            container.Options.DefaultScopedLifestyle = new WebApiRequestLifestyle();
            
            InitializeContainer(container);

            container.RegisterWebApiControllers(GlobalConfiguration.Configuration);
       
            container.Verify();
            
            GlobalConfiguration.Configuration.DependencyResolver =
                new SimpleInjectorWebApiDependencyResolver(container);
        }
     
        private static void InitializeContainer(Container container)
        {
			container.Register<YoutubingDataContext>(Lifestyle.Scoped);
			container.Register<ISessionRepository, EfSessionRepository>(Lifestyle.Scoped);
			container.Register<IRandomIdGenerator, Base62RandomIdGenerator>(Lifestyle.Scoped);
			container.Register<SessionService>(Lifestyle.Scoped);
		}
    }
}