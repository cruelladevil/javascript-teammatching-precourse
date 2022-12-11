const MatchingController = require("./contrlloers/MatchingController");
const { Console } = require("@woowacourse/mission-utils");

class App {
  #match;

  constructor() {
    this.#match = new MatchingController();
  }

  play() {
    this.#match.onReadSelectValue();
  }
}

const app = new App();
app.play();

module.exports = App;
