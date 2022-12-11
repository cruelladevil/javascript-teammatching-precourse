const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT } = require('./constants');

const OutputView = {
  printCourseAndMission() {
    Console.print(Object.values(OUTPUT.COURSE_AND_MISSION).join('\n'));
  },
};

module.exports = OutputView;
