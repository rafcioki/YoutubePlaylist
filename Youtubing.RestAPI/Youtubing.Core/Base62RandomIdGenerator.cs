using System;
using System.Text;

namespace Youtubing.Core
{
	public class Base62RandomIdGenerator : IRandomIdGenerator
	{
		private const int BaseCharsNumber = 62;

		private readonly char[] _base62Chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".ToCharArray();
		private readonly Random _randomNumbersGenerator = new Random();

		public string Generate(int length)
		{
			var stringBuilder = new StringBuilder();

			for (int i = 0; i < length; ++i)
			{
				stringBuilder.Append(_base62Chars[_randomNumbersGenerator.Next(BaseCharsNumber)]);
			}

			return stringBuilder.ToString();
		}
	}
}
