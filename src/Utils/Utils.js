const { Console } = require("@woowacourse/mission-utils");

const Utils = {
  print(message) {
    Console.print(message);
  },

  readLine(query, callback) {
    Console.readLine(query, callback);
  },

  close() {
    Console.close();
  },
};

module.exports = Utils;
