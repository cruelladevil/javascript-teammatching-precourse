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
    const backendCrewNames = this.onReadFile(dirBackend)
      .replace("\n", "")
      .split(" ");
    const frontendCrewNames = this.onReadFile(dirFrontend)
      .replace("\n", "")
      .split(" ");

    return { backendCrewNames, frontendCrewNames };
  },
};

module.exports = FilerReader;
