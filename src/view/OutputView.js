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
    Console.print(MENT.RESULT);
    Console.print(pareList);
  },

  printCourseMission(missionList) {
    Console.print(MENT.UI.DIVISION);
    Console.print(MENT.UI.COURSE);
    Console.print(missionList);
    Console.print(MENT.UI.DIVISION);
  },
};

module.exports = OutputView;
