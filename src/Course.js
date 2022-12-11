const Level = require("./Level");

const Course = {
  FRONTEND: "프론트엔드",
  BACKEND: "백엔드",
  MISSION: {
    [Level.LEVEL1]: ["자동차경주", "로또", "숫자야구게임"],
    [Level.LEVEL2]: ["장바구니", "결제", "지하철노선도"],
    [Level.LEVEL3]: [],
    [Level.LEVEL4]: ["성능개선", "배포"],
    [Level.LEVEL5]: [],
  },
};

module.exports = Course;
