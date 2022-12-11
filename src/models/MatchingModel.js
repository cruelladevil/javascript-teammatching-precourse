const { shuffle } = require("../utils/ShuffleCrews");

const CrewModel = require("./CrewModel");

class MatchingModel {
  #crewModel;
  #totalCrews;

  constructor() {
    this.#crewModel = new CrewModel();
    this.#totalCrews = [];
  }

  buildMatchingResult(slicedFairs) {
    return slicedFairs.map((ele) =>
      ele.map((index) => this.#totalCrews[index].crew.getCrewInfo().name)
    );
  }

  shuffleFairMatching(course) {
    this.#totalCrews = this.#crewModel.converToIndexList(course);
    const totalIndexs = this.#totalCrews.map(({ index }) => index);

    return shuffle(totalIndexs);
  }

  makeFair(course) {
    const shuffledFairs = this.shuffleFairMatching(course);
    const slicedFairs = this.sliceFairs(shuffledFairs);

    slicedFairs.forEach((ele) => {
      for (let i = 0; i < ele.length; i += 1) this.addPairList(i, ele);
    });

    console.log(`my pair list : ${this.#totalCrews[0].crew.getPairList()}`);
    return this.buildMatchingResult(slicedFairs);
  }

  addPairList(index, ele) {
    for (let j = 0; j < ele.length; j += 1) {
      if (index == j) continue;

      this.#totalCrews[ele[index]].crew.addPairList(ele[j]);
    }
  }

  sliceFairs(array) {
    let slicedArray = [];
    Loop: for (let i = 0; i < array.length; i += 2) {
      if (array.length % 2 !== 0 && i === array.length - 3) {
        slicedArray.push(array.slice(i));
        break Loop;
      }

      slicedArray.push(this.slice(array, i));
    }

    return slicedArray;
  }

  slice(array, index) {
    return array.slice(index, index + 2);
  }
}

module.exports = MatchingModel;
