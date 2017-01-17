using System;

namespace Youtubing.RestAPI.Services.Exceptions
{
	public class AlreadyExistsException : Exception
	{
		public AlreadyExistsException(string entityId) : base($"Entity with id {entityId} already exists in the database.")
		{
			EntityId = entityId;
		}

		public string EntityId { get; set; }
	}
}
