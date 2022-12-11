const { FRONTEND, BACKEND } = require("../Course");
const { shuffle } = require("../lib/RandomShuffle");

class PareMatching {
  #frontendCrews;
  #backendCrews;
  #pare = {};

  constructor(frontCrews, backCrews) {
    this.#frontendCrews = frontCrews;
    this.#backendCrews = backCrews;
  }

  shuffleCrews(course, level) {
    if (course === FRONTEND) this.#frontendCrews = shuffle(this.#frontendCrews);
    if (course === BACKEND) this.#backendCrews = shuffle(this.#backendCrews);
    this.frontMatching(course, level);
  }

  initPare() {
    this.#pare = {};
    return { index: 0 };
  }

  frontMatching(course, level) {
    let { index } = this.initPare();
    while (index < this.#frontendCrews.length - 1) {
      const currentCrew = this.#frontendCrews[index];
      const nextCrew = this.#frontendCrews[index + 1];
      if (!this.hasMatchedThisLevel(currentCrew, nextCrew, level))
        this.matchingThisLevel(currentCrew, nextCrew, level);
      if (this.hasMatchedThisLevel(currentCrew, nextCrew, level))
        this.shuffleCrews(course);
      index += 2;
    }
  }

  backMatching(level) {
    let { index } = this.initPare();
    while (index < this.#backendCrews.length - 1) {
      const currentCrew = this.#backendCrews[index];
      const nextCrew = this.#backendCrews[index + 1];
      if (!this.hasMatchedThisLevel(currentCrew, nextCrew, level))
        this.matchingThisLevel(currentCrew, nextCrew, level);
      if (this.hasMatchedThisLevel(currentCrew, nextCrew, level)) {
      }
      index += 2;
    }
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
