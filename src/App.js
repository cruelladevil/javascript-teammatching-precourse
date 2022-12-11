const PairMatch = require('./Model/PairMatch');
const PairMatchController = require('./Controller/PairMatchController');

class App {
  play() {
    const pairMatch = new PairMatch();

    PairMatchController.run(pairMatch);
  }
}

module.exports = App;
