const INPUT = Object.freeze({
  FEATURE:
    '기능을 선택하세요.\n1. 페어 매칭\n2. 페어 조회\n3. 페어 초기화\nQ. 종료\n',
  COURSE_LEVEL_MISSION:
    '과정, 레벨, 미션을 선택하세요.\nex) 백엔드, 레벨1, 자동차경주\n',
});

const COURSE_AND_MISSION = Object.freeze({
  PREFIX: '#############################################',
  COURSE: '과정: 백엔드 | 프론트엔드',
  MISSION:
    '미션:\n  - 레벨1: 자동차경주 | 로또 | 숫자야구게임\n  - 레벨2: 장바구니 | 결제 | 지하철노선도\n  - 레벨3:\n  - 레벨4: 성능개선 | 배포\n  - 레벨5:',
  SUFFIX: '############################################',
});

const OUTPUT = Object.freeze({
  COURSE_AND_MISSION,
  PAIR_MATCH_RESULT: '페어 매칭 결과입니다.',
});

module.exports = { INPUT, OUTPUT };
