const { Console } = require('@woowacourse/mission-utils');
const { INPUT } = require('./constants');

const InputView = {
  readFeature(callback) {
    Console.readLine(INPUT.FEATURE, callback);
  },

  readCourseLevelMission(callback) {
    Console.readLine(INPUT.COURSE_LEVEL_MISSION, callback);
  },
};

module.exports = InputView;
