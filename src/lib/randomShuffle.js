const { Random } = require("@woowacourse/mission-utils");

const RandomShuffle = {
  Shuffle(array) {
    return Random.shuffle(array);
  },
};

module.exports = RandomShuffle;
