const { Console } = require("@woowacourse/mission-utils");
const MENT = require("../const/ment");

const OutputView = {
  printError(error) {
    Console.Print(error.message);
  },

  printInitMent() {
    Console.print(MENT.INIT);
  },

  printResult(pareList) {
    Console.print(MENT.RESULT.PAREMATCHING);
    Console.print(pareList);
  },

  printCourseMission(course, missionList) {
    Console.print(MENT.UI.DIVISION);
    Console.print(MENT.UI.COURSE + course);
    Console.print(MENT.UI.MISSION);
    Console.print(missionList);
    Console.print(MENT.UI.DIVISION);
  },

  printClose() {
    Console.close();
  },
};

module.exports = OutputView;
