const { Random } = require("@woowacourse/mission-utils");

const SuffleCrews = {
  suffle(crewNames) {
    return Random.shuffle(crewNames);
  },
};

module.exports = SuffleCrews;
