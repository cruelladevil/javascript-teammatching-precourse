const fs = require("fs");

const dirBackend = "src/resources/backend-crew.md";
const dirFrontend = "src/resources/frontend-crew.md";
const encoding = "utf-8";

const FilerReader = {
  onReadFile(dir) {
    const names = fs.readFileSync(dir, encoding);

    return names;
  },

  getCrewNames() {
    const backendCrewNames = onReadFile(dirBackend);
    const frontendCrewNames = onReadFile(dirFrontend);

    return { backendCrewNames, frontendCrewNames };
  },
};
module.exports = FilerReader;
