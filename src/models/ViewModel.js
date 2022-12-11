const MatchingModel = require("../models/MatchingModel");

class ViewModel {
  #matchingModel;
  #userInput;
  #course;
  #level;
  #mission;

  constructor(input) {
    console.log(input);
    this.validate(input);

    this.#userInput = input;
    this.#course = input[0];
    this.#level = input[1];
    this.#mission = input[2];

    this.#matchingModel = new MatchingModel();
  }

  validate(input) {}

  buildMatchingResultView() {
    const pairs = this.#matchingModel.makeFair(this.#course);
    const joinnedString = pairs.map((pair) => pair.join(" : "));

    return joinnedString;
  }

  buildMatchedResultView() {
    const matchResult = this.buildMatchingResultView();
  }
}

module.exports = ViewModel;
