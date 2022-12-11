const Crew = require('./Crew');

class PairMatch {
  #crews = [];

  createPairMatch(course, crewNames) {
    this.#crews = crewNames.map((name) => new Crew(course, name));
  }

  shuffleCrews() {
    const indices = Array.from({ length: this.#crews.length }, (_, i) => i);
    const suffledIndices = Random.shuffle(indices);
    const suffledCrews = suffledIndices.map((index) => this.#crews[index]);

    this.#crews = suffledCrews;
  }
}

module.exports = PairMatch;
