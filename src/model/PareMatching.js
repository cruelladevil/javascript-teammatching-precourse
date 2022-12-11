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
      if (!this.hasMatchedThisLevel(currentCrew, nextCrew, level))
        this.matchingThisLevel(currentCrew, nextCrew, level);
      if (this.hasMatchedThisLevel(currentCrew, nextCrew, level)) {
      }
      index += 2;
    }
    return this;
  }

  hasMatchedThisLevel(cur, next, level) {
    const history = cur.getMatchedRecord(level);
    if (history.includes(next.getName())) return true;
    if (!history.includes(next.getName())) return false;
  }

  matchingThisLevel(cur, next, level) {
    cur.matching(level, next.getName());
    next.matching(level, cur.getName());
    this.#pare[cur.getName()] = next.getName();
  }

  getMyPare() {
    return this.#pare;
  }
}

module.exports = PareMatching;
