const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');
const CrewFileSystem = require('./CrewFileSystem');
const PairViewController = require('./PairViewController');

const PairMatchController = {
  run(pairMatch) {
    PairMatchController.readFeature(pairMatch);
  },

  readFeature(pairMatch) {
    InputView.readFeature((input) => {
      switch (input) {
        case '1':
          return PairMatchController.createPairMatch(pairMatch);
        case '2':
          return PairMatchController.searchPairMatch(pairMatch);
        case '3':
          return PairMatchController.initializePairMatch(pairMatch);
        case 'Q':
          return PairMatchController.end();
      }
    });
  },

  createPairMatch(pairMatch) {
    OutputView.printCourseAndMission();
    InputView.readCourseLevelMission((input) => {
      const [course, level, mission] = input.split(', ');

      CrewFileSystem.readCrewFile(course, (crewNames) => {
        pairMatch.createPairMatch(course, crewNames);
        const pairView = PairViewController.buildPairView(pairMatch.getPairs());
        OutputView.printPairMatchResult(pairView);
      });
    });
  },

  searchPairMatch() {
    console.log('페어 조회');
  },

  initializePairMatch() {
    console.log('페어 초기화');
  },

  end() {},
};

module.exports = PairMatchController;
