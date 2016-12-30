using Moq;
using NUnit.Framework;
using Youtubing.Core;
using Youtubing.DataAccess.Exceptions;
using Youtubing.RestAPI.Services.Repositories;

namespace Youtubing.RestAPI.Services.Tests
{
	[TestFixture]
    public class SessionServiceTests
	{
		private Mock<ISessionRepository> _fakeSessionRepository;
		private Mock<IRandomIdGenerator> _fakeRandomIdGenerator;

		[SetUp]
		public void SetUp()
		{
			_fakeSessionRepository = new Mock<ISessionRepository>();
			_fakeRandomIdGenerator = new Mock<IRandomIdGenerator>();
		}

		[Test]
		public void ShouldInsertSessionIfGeneratedIdIsNotDuplicated()
		{
			// Arrange
			const string generatedId = "xyz";

			_fakeSessionRepository.Setup(sr => sr.CreateSession(generatedId)).Returns(generatedId);
			_fakeRandomIdGenerator.Setup(rig => rig.Generate(It.IsAny<int>())).Returns(generatedId);

			var sessionService = new SessionService(_fakeSessionRepository.Object, _fakeRandomIdGenerator.Object);

			// Act
			string createdSessionId = sessionService.CreateSession();

			// Assert
			Assert.AreEqual(generatedId, createdSessionId);
			_fakeRandomIdGenerator.Verify(rig => rig.Generate(It.IsAny<int>()), Times.Once);
			_fakeSessionRepository.Verify(sr => sr.CreateSession(It.IsAny<string>()), Times.Once);
		}

		[Test]
		public void ShouldRegenerateSessionIdIfFirstRandomValueAlreadyExists()
		{
			// Arrange
			const string idAlreadyExisting = "xyz";
			const string idNotYetExisting = "xyz2";

			_fakeSessionRepository.Setup(sr => sr.CreateSession(idAlreadyExisting)).Throws(new AlreadyExistsException(idAlreadyExisting));
			_fakeSessionRepository.Setup(fsr => fsr.CreateSession(idNotYetExisting)).Returns(idNotYetExisting);

			_fakeRandomIdGenerator.SetupSequence(rig => rig.Generate(It.IsAny<int>()))
				.Returns(idAlreadyExisting)
				.Returns(idNotYetExisting);

			var sessionService = new SessionService(_fakeSessionRepository.Object, _fakeRandomIdGenerator.Object);

			// Act
			string createdSessionId = sessionService.CreateSession();

			// Assert
			Assert.AreEqual(idNotYetExisting, createdSessionId);
		}
	}
}
