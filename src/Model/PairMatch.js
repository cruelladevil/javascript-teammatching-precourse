const { Random } = require('@woowacourse/mission-utils');
const Crew = require('./Crew');

class PairMatch {
  #crews = [];
  #pairs = [];

  createPairMatch(course, crewNames) {
    this.#crews = crewNames.map((name) => new Crew(course, name));
    this.shuffleCrews();
    this.createPairs();
  }

  shuffleCrews() {
    const indices = Array.from({ length: this.#crews.length }, (_, i) => i);
    const shuffledIndices = Random.shuffle(indices);
    const shuffledCrews = shuffledIndices.map((index) => this.#crews[index]);

    this.#crews = shuffledCrews;
  }

  createPairs() {
    for (let i = 0; i < this.#crews.length - 1; i += 2) {
      this.#pairs.push(this.#crews.slice(i, i + 2));
    }

    if (this.#crews.length % 2 === 1) this.#pushOddPair();
  }

  #pushOddPair() {
    const lastPair = this.#pairs[this.#pairs.length - 1];
    const lastCrew = this.#crews[this.#crews.length - 1];
    lastPair.push(lastCrew);
  }

  getPairs() {
    return this.#pairs;
  }
}

module.exports = PairMatch;
