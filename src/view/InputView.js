const { Console } = require("@woowacourse/mission-utils");
const MENT = require("../const/ment");

const InputView = {
  inputFunction(callback) {
    Console.readLine(MENT.SELECT.FUNC, callback);
  },

  inputCourseMission(callback) {
    Console.readLine(MENT.SELECT.COURSE_MISSION, callback);
  },

  inputRematching(callback) {
    Console.readLine(MENT.REMATCHING, callback);
  },
};

module.exports = InputView;
