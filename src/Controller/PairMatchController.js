const InputView = require('../View/InputView');

const PairMatchController = {
  run() {
    PairMatchController.readFeature();
  },

  readFeature() {
    InputView.readFeature((input) => {});
  },
};

module.exports = PairMatchController;
