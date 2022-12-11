const ImportCrewName = require("../lib/ImportCrewName");
const { FRONTEND, BACKEND } = require("../Course");
const Crew = require("../model/Crew");

const CourseCrewController = {
  initFrontCrew() {
    const crews = ImportCrewName.frontendRead();
    const frontCrews = crews.map((name) => new Crew(name, FRONTEND));
    return frontCrews;
  },

  initBackCrew() {
    const crews = ImportCrewName.backendRead();
    const backCrews = crews.map((name) => new Crew(name, BACKEND));
    return backCrews;
  },
};

module.exports = CourseCrewController;
