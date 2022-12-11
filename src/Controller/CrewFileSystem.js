const fs = require('node:fs');
const Course = require('../Model/Course');

const CrewFileSystem = {
  [Course.BACKEND]: __dirname + '/../resources/backend-crew.md',
  [Course.FRONTEND]: __dirname + '/../resources/frontend-crew.md',

  readCrewFile(course, callback) {
    const dir = CrewFileSystem[course];

    fs.readFile(dir, 'utf8', (err, data) => {
      if (err) throw err;

      const crewNames = CrewFileSystem.getCrewNames(data);
      callback(crewNames);
    });
  },

  getCrewNames(data) {
    return data.slice(0, -1).split(' ');
  },
};

module.exports = CrewFileSystem;
