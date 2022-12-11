const { Random } = require("@woowacourse/mission-utils");

const RandomShuffle = {
  shuffle(array) {
    return Random.shuffle(array);
  },
};

module.exports = RandomShuffle;
