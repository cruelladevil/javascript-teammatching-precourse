const { LEVEL1, LEVEL2, LEVEL3, LEVEL4, LEVEL5 } = require("../Level");

class Crew {
  #course;
  #matched = {
    [LEVEL1]: [],
    [LEVEL2]: [],
    [LEVEL3]: [],
    [LEVEL4]: [],
    [LEVEL5]: [],
  };
  #name;

  constructor(name, course) {
    this.#name = name;
    this.#course = course;
  }

  getName() {
    return this.#name;
  }

  matching(level, name) {
    this.#matched[level].push(name);
  }

  getMatchedRecord(level) {
    return this.#matched[level];
  }
}

module.exports = Crew;
