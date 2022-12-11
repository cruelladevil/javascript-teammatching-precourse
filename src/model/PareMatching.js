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

  shuffleCrews(course) {
    if (course === FRONTEND) this.#frontendCrews = shuffle(this.#frontendCrews);
    if (course === BACKEND) this.#backendCrews = shuffle(this.#backendCrews);
    return this;
  }
}

module.exports = PareMatching;
