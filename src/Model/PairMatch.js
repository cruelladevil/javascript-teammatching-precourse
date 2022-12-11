const Crew = require('./Crew');

class PairMatch {
  #crews = [];

  createPairMatch(course, crewNames) {
    this.#crews = crewNames.map((name) => new Crew(course, name));
  }
}

module.exports = PairMatch;
