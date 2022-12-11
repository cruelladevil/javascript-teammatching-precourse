const { Random } = require("@woowacourse/mission-utils");

const ShuffleCrews = {
  shuffle(crewNames) {
    return Random.shuffle(crewNames);
  },
};

module.exports = ShuffleCrews;
