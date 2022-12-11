const InputView = require("../InputView");
const OutputView = require("../OutputView");

class MatchingController {
  constructor() {}

  onInputRecrusive(inputFunc, callback) {
    inputFunc((input) => {
      try {
        callback(input);
      } catch (e) {
        OutputView.printMessage(e);
      }
    });
  }

  onReadSelectValue() {
    this.onInputRecrusive(
      InputView.readSelectValue,
      this.handleSelectValue.bind(this)
    );
  }

  onReadSelectMatching() {
    this.onInputRecrusive(
      InputView.readSelectMaching,
      this.handleSelectMaching.bind(this)
    );
  }

  handleSelectValue(input) {
    console.log(input);

    if (Number(input) == 1)
      this.onReadSelectMatching(this.handleSelectMaching.bind(this));
  }

  handleSelectMaching(input) {
    console.log(input);
    console.log("매칭!!!");
  }
}

module.exports = MatchingController;
