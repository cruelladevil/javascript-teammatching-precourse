const InputView = require("../InputView");
const OutputView = require("../OutputView");
const ViewModel = require("../models/ViewModel");

class MatchingController {
  #viewModel;

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

  onQueryMatchedPair() {}

  handleSelectValue(input) {
    console.log(input);

    if (Number(input) === 1) this.onReadSelectMatching();
    if (Number(input) === 2) this.onReadSelectMatching();
    if (Number(input) === 3) this.onReadSelectMatching();
    if (input == "Q") InputView.end();
  }

  handleSelectMaching(input) {
    this.#viewModel = new ViewModel(input);
    const inputs = input.split(", ");
    const buildedMatchingResult = this.#viewModel.buildMatchingResultView(
      inputs[0]
    );
    OutputView.printTextMatchedResult();
    OutputView.printMatchResult(buildedMatchingResult);
    this.onReadSelectValue();
  }
}

module.exports = MatchingController;
