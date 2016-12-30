using System;

namespace Youtubing.DataAccess.Exceptions
{
	public class AlreadyExistsException : Exception
	{
		public string EntityId { get; set; }

		public AlreadyExistsException(string entityId) : base($"Entity with id {entityId} already exists in the database.")
		{
		}
	}
}
