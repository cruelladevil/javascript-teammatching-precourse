const { FRONTEND, BACKEND } = require("../Course");
const { shuffle } = require("../lib/RandomShuffle");
const Level = require("../Level");

class PareMatching {
  #frontendCrews;
  #backendCrews;
  #pare = {};

  constructor(frontCrews, backCrews) {
    this.#frontendCrews = frontCrews;
    this.#backendCrews = backCrews;
  }

  shuffleCrews(course) {
    if (course === FRONTEND) this.#frontendCrews = shuffle(this.#frontendCrews);
    if (course === BACKEND) this.#backendCrews = shuffle(this.#backendCrews);
    return this;
  }

  frontMatching(level) {
    let index = 0;
    while (index < this.#frontendCrews.length - 1) {
      const currentCrew = this.#frontendCrews[index];
      const nextCrew = this.#frontendCrews[index + 1];
      if (!hasMatchedThisLevel(currentCrew, nextCrew, level))
        matchingThisLevel(currentCrew, nextCrew, level);
      if (hasMatchedThisLevel(currentCrew, nextCrew, level)) {
      }
      count += 2;
    }
  }

  hasMatchedThisLevel(cur, next, level) {
    const history = cur.getMatchedRecord(level);
    if (history.include(next.getName())) return true;
    if (!history.include(next.getName())) return false;
  }

  matchingThisLevel(cur, next, level) {
    cur.matching(next.getName(), level);
    next.matching(cur.getName(), level);
    this.#pare[cur.getName()] = next.getName();
  }
}

module.exports = PareMatching;
