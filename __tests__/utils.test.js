const {
  formatDates,
  makeRefObj,
  formatComments,
} = require('../db/utils/utils');

describe('formatDates', () => {
  test('when passed an empty array return an array ', () => {
    expect(Array.isArray(formatDates([]))).toBe(true);
  });
  test('when passed an array return a new array ', () => {
    const input = [];
    //const expectedOutput = []
    const actualOutput = formatDates(input);
    expect(actualOutput).not.toBe(input);
  });
  test('when passed an array with an object that object is returned with created at tested with instance of   ', () => {
    const input = [{ iNeedHelp: 'please' }];
    const expectedOutput = true;
    const actualOutput = formatDates(input);
    expect(actualOutput instanceof Object).toEqual(expectedOutput);
  });
  test('when passed an array with an object that object is returned without being mutated  ', () => {
    const input = [{ iNeedHelp: 'please', created_at: 1542284514171 }];
    const actualOutput = formatDates(input);
    expect(actualOutput).not.toBe(input);
  });

  test('when passed an array with many objects those objects are returned with all there values  ', () => {
    const input = [
      { iNeedHelp: 'please', created_at: 1542284514171 },
      {
        iDontUnderstand: 'help',
        created_at: 1542284514171,
      },
    ];
    const expectedOutput = [
      { iNeedHelp: 'please', created_at: new Date().getDate() },
      {
        iDontUnderstand: 'help',
        created_at: '2018-11-15T12:21:54.171Z',
      },
    ];
    const actualOutput = formatDates(input);
    expect(actualOutput).not.toBe(input);
  });
});

describe('makeRefObj', () => {
  // test('when passed an empty array return an array ', () => {
  //   expect(Array.isArray(formatDates([]))).toBe(true);
  // });
  test('when passed an array return a new array ', () => {
    const input = [];
    //const expectedOutput = []
    const actualOutput = formatDates(input);
    expect(actualOutput).not.toBe(input);
  });
  test('when passed an array with an object that object is returned with the article_ids value becoming the value for the titles value', () => {
    const input = [{ article_id: 1, title: 'A' }];
    const expectedOutput = { A: 1 };
    const actualOutput = makeRefObj(input);
    expect(actualOutput).toEqual(expectedOutput);
  });
  test('when passed an array with many objects those objects are returned with the article_ids value becoming the value for the titles value', () => {
    const input = [
      { article_id: 1, title: 'A' },
      { article_id: 2, title: 'B' },
      { article_id: 3, title: 'C' },
    ];
    const expectedOutput = { A: 1, B: 2, C: 3 };
    const actualOutput = makeRefObj(input);
    expect(actualOutput).toEqual(expectedOutput);
  });
});

describe('formatComments', () => {
  test('return a new array', () => {
    const comments = [];
    const articleRef = [];
    const actual = formatComments(comments, articleRef);
    expect(actual).toEqual([]);
    expect(actual).not.toBe(comments);
  });
  test('', () => {
    const comments = [
      {
        body:
          "Oh, I've got compassion running out of my nose, pal! I'm the Sultan of Sentiment!",
        belongs_to: "They're not exactly dogs, are they?",
        created_by: 'butter_bridge',
        votes: 16,
      },
    ];
    const articleRef = { "They're not exactly dogs, are they?": 1};
    const actual = formatComments(comments, articleRef);
    expect(actual).toEqual([
      {
        body:
          "Oh, I've got compassion running out of my nose, pal! I'm the Sultan of Sentiment!",
        article_id: 1,
        author: 'butter_bridge',
        votes: 16,
      },
    ]);
    expect(actual).not.toBe(comments);
  });
  test('rename the keys in the object and make the refrence for one object ', () => {
    const comments = [
      {
        body:
          "Oh, I've got compassion running out of my nose, pal! I'm the Sultan of Sentiment!",
        belongs_to: "They're not exactly dogs, are they?",
        created_by: 'butter_bridge',
      },
      {
        body:
          'The beautiful thing about treasure is that it exists. Got to find out what kind of sheets these are; not cotton, not rayon, silky.',
        belongs_to: 'Living in the shadow of a great man',
        created_by: 'butter_bridge',
       
        
      },
    ];
    const articleRef = { "They're not exactly dogs, are they?": 1, 'Living in the shadow of a great man': 2 };
    const expected = [
      {
        body:
          "Oh, I've got compassion running out of my nose, pal! I'm the Sultan of Sentiment!",
        author: 'butter_bridge',
        article_id: 1,
      },
      {
        body:
          'The beautiful thing about treasure is that it exists. Got to find out what kind of sheets these are; not cotton, not rayon, silky.',
        article_id: 2,
        author: 'butter_bridge',
        
      },
    ];
    const actual = formatComments(comments, articleRef);
    expect(actual).toEqual(expected);
  });
});
