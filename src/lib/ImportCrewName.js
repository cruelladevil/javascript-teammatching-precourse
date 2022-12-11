const fs = require("fs");

const ImportCrewName = {
  backSrc: "src/resources/backend-crew.md",
  frontSrc: "src/resources/frontend-crew.md",

  readFile(src) {
    let list = [];
    try {
      const string = fs.readFileSync(src, "utf8");
      list = string.split(" ");
    } catch (err) {
      console.error(err);
    }
    return list;
  },

  backendRead() {
    return ImportCrewName.readFile(ImportCrewName.backSrc);
  },

  frontendRead() {
    return ImportCrewName.readFile(ImportCrewName.frontSrc);
  },
};

module.exports = ImportCrewName;
