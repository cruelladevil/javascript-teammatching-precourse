const Course = require("../Course");
const { UI } = require("../const/ment");

const ViewController = {
  missionView() {
    let view = "";
    for (const level in Course.MISSION) {
      missons = Course.MISSION[level];
      const mission = missons.join(" | ");
      view += UI.MISSSION_INDENT + level + " : " + mission + "\n";
    }
    return view;
  },
};

module.exports = ViewController;
