const { Console } = require('@woowacourse/mission-utils');
const { INPUT } = require('./constants');

const InputView = {
  readFeature(callback) {
    Console.readLine(INPUT.FEATURE, callback);
  },
};

module.exports = InputView;
