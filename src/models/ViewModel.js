const MatchingModel = require("../models/MatchingModel");

class ViewModel {
  #matchingModel;

  constructor() {
    this.#matchingModel = new MatchingModel();
  }

  buildMatchingResultView(course) {
    const pairs = this.#matchingModel.makeFair(course);
    const joinnedString = pairs.map((pair) => pair.join(" : "));

    return joinnedString;
  }
}

module.exports = ViewModel;
