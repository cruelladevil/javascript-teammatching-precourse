const { LEVEL1 } = require("../Level");
const PareMatching = require("../model/PareMatching");
const CourseCrewController = require("./CourseCrewController");

class MatchingController {
  #pareMatching;

  constructor() {
    const frontCrews = CourseCrewController.initBackCrew();
    const backCrews = CourseCrewController.initFrontCrew();
    this.#pareMatching = new PareMatching(frontCrews, backCrews);
    //입력 받기
  }

  start() {
    const pare = this.#pareMatching.frontMatching(LEVEL1).getMyPare();
    console.log(pare);
  }
}

const a = new MatchingController();
a.start();
module.exports = MatchingController;
