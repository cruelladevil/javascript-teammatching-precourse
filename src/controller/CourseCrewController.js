const ImportCrewName = require("../lib/ImportCrewName");
const { FRONTEND, BACKEND } = require("../Course");
const Crew = require("../model/Crew");

const CourseCrewController = {
  initFrontCrew() {
    const frontCrews = [];
    const crews = ImportCrewName.frontendRead();
    crews.forEach((name) => crewList.push(new Crew(name, FRONTEND)));
    return frontCrews;
  },

  initBackCrew() {
    const backCrews = [];
    const crews = ImportCrewName.backendRead();
    crews.forEach((name) => crewList.push(new Crew(name, BACKEND)));
    return backCrews;
  },
};

module.exports = CourseCrewController;
