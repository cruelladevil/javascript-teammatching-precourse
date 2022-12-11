const PairViewController = {
  buildPairView(pairs) {
    return pairs
      .map((pair) => PairViewController.buildPairString(pair))
      .join('\n');
  },

  buildPairString(pair) {
    return pair.map((crew) => crew.getName()).join(' : ');
  },
};

module.exports = PairViewController;
