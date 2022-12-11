const PairMatchController = require('./Controller/PairMatchController');

class App {
  play() {
    PairMatchController.run();
  }
}

module.exports = App;
