const { FRONTEND, BACKEND, MISSION } = require("../Course");
const PareMatching = require("../model/PareMatching");
const {
  inputFunction,
  inputCourseMission,
  inputRematching,
} = require("../view/InputView");
const {
  printError,
  printResult,
  printCourseMission,
  printClose,
} = require("../view/OutputView");
const CourseCrewController = require("./CourseCrewController");
const ViewController = require("./ViewController");

class MatchingController {
  #pareMatching;
  #missionPare;

  constructor() {
    const frontCrews = CourseCrewController.initBackCrew();
    const backCrews = CourseCrewController.initFrontCrew();
    this.#pareMatching = new PareMatching(frontCrews, backCrews);
  }

  start() {
    inputFunction((command) => {
      try {
        // validator(cammand);
      } catch (error) {
        printError(error);
        this.start();
      }
      this.selectFuction(command);
    });
  }

  selectFuction(command) {
    //to do 나중에 고치기
    if (command === "1") this.selectCourseMission();
    if (command === "2") this.selectCourseMission();
    if (command === "3") this.selectCourseMission();
    if (command === "Q") this.endMatching();
  }

  selectCourseMission() {
    printCourseMission(`${FRONTEND},${BACKEND}`, ViewController.missionView());
    inputCourseMission((answer) => {
      try {
        // validator(cammand);
      } catch (error) {
        printError(error);
        this.start();
      }
      this.matchingStart(answer);
    });
  }

  matchingStart(answer) {
    const [course, level, mission] = answer.split(", ");
    const pare = this.getMatchingResult(course, level, mission);
    console.log(level, pare);
    this.matchingPrint(pare);
  }

  getMatchingResult(course, level, mission) {
    if (course === FRONTEND) this.#pareMatching.shuffleCrews(course, level);
    if (course === BACKEND) this.#pareMatching.shuffleCrews(course, level);
    // mission 에 매칭 이력 넣어야 한다.
    return this.#pareMatching.getMyPare();
  }

  matchingPrint(pare) {
    printResult(ViewController.pareView(pare));
    this.start();
  }

  selectRematching() {
    inputRematching((command) => {
      try {
        // validator(cammand);
      } catch (error) {
        printError(error);
        this.selectRematching();
      }
      this.selectFuction(command);
    });
  }

  endMatching() {
    printClose();
    return;
  }
}

const a = new MatchingController();
a.start();
module.exports = MatchingController;
