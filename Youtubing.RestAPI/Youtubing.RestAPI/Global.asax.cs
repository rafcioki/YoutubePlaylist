using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using SimpleInjector;
using SimpleInjector.Integration.WebApi;
using Youtubing.Core;
using Youtubing.DataAccess.Repositories;
using Youtubing.RestAPI.Services;
using Youtubing.RestAPI.Services.Repositories;

namespace Youtubing.RestAPI
{
	public class WebApiApplication : System.Web.HttpApplication
	{
		protected void Application_Start()
		{
			AreaRegistration.RegisterAllAreas();
			GlobalConfiguration.Configure(WebApiConfig.Register);
			FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
			RouteConfig.RegisterRoutes(RouteTable.Routes);
			BundleConfig.RegisterBundles(BundleTable.Bundles);

			//SetupSimpleInjector();
		}

		private void SetupSimpleInjector()
		{
			var container = new Container();
			container.Options.DefaultScopedLifestyle = new WebApiRequestLifestyle();

			container.Register<ISessionRepository, EfSessionRepository>();
			container.Register<IRandomIdGenerator, Base62RandomIdGenerator>();
			container.Register<SessionService>(Lifestyle.Scoped);
		}
	}
}
