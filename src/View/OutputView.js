const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT } = require('./constants');

const OutputView = {
  printCourseAndMission() {
    Console.print(Object.values(OUTPUT.COURSE_AND_MISSION).join('\n'));
  },

  printPairMatchResult(pairView) {
    Console.print(OUTPUT.PAIR_MATCH_RESULT);
    Console.print(pairView);
  },
};

module.exports = OutputView;
