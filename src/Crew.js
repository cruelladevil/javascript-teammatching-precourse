class Crew {
  #course;
  #name;
  #pairList;
  #myIndex;

  constructor(index, course, name) {
    this.#myIndex = index;
    this.#course = course;
    this.#name = name;
    this.#pairList = [];
  }

  getPairList() {
    const pairList = this.#pairList;
    return pairList;
  }

  getIndex() {
    const index = this.#myIndex;
    return index;
  }

  getCrewInfo() {
    const course = this.#course;
    const name = this.#name;

    return { course, name };
  }

  addPairList(pairIndex) {
    if (!this.isExist(pairIndex) !== -1) this.#pairList.push(pairIndex);
  }

  isExist(pairIndex) {
    return this.#pairList.indexOf(pairIndex);
  }
}

module.exports = Crew;
