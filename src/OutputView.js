const { print, close } = require("./utils/Utils");

const OutputView = {
  printMatchResult(messageArray) {
    print("\n페어 매칭 결과입니다.");
    messageArray.forEach((str) => print(str));
  },

  printMessage(message) {
    print(message);
  },
};

module.exports = OutputView;
