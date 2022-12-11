const ShuffleCrews = require("../utils/ShuffleCrews");
const FileReader = require("../utils/FileReader");
const Crew = require("../Crew");

class CrewModel {
  constructor() {}

  mapCrewFunc(array, course) {
    return array.map((name, index) => {
      const crew = new Crew(index, course, name);
      return { index: index, crew };
    });
  }

  converToIndexList(course) {
    const { backendCrewNames, frontendCrewNames } = FileReader.getCrewNames();

    const crewsNames =
      course === "백엔드" ? backendCrewNames : frontendCrewNames;

    const crews = this.mapCrewFunc(crewsNames, course);

    return crews;
  }
}

module.exports = CrewModel;
