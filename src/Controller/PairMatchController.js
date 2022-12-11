const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');

const PairMatchController = {
  run() {
    PairMatchController.readFeature();
  },

  readFeature() {
    InputView.readFeature((input) => {
      switch (input) {
        case '1':
          return PairMatchController.createPairMatch();
        case '2':
          return PairMatchController.searchPairMatch();
        case '3':
          return PairMatchController.initializePairMatch();
        case 'Q':
          return PairMatchController.end();
      }
    });
  },

  createPairMatch() {
    OutputView.printCourseAndMission();
    InputView.readCourseLevelMission((input) => {});
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
