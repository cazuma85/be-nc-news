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
  test('when passed an array with an object that object is returned with all its values   ', () => {
    const input = [{ iNeedHelp: 'please' }];
    const expectedOutput = [
      { iNeedHelp: 'please', currentTime: new Date().getDate() },
    ];
    const actualOutput = formatDates(input);
    expect(actualOutput).toEqual(expectedOutput);
  });
  test('when passed an array with an object that object is returned without being mutated  ', () => {
    const input = [{ iNeedHelp: 'please', currentTime: new Date().getDate() }];
    const expectedOutput = [
      { iNeedHelp: 'please', currentTime: new Date().getDate() },
    ];
    const actualOutput = formatDates(input);
    expect(actualOutput).not.toBe(input);
  });
  test('when passed an array with many objects those objects are returned with all there values  ', () => {
    const input = [
      {
        iNeedHelp: 'please',
        currentTime: new Date().getDate(),
      },
      {
        iDontUnderstand: 'help',
        currentTime: new Date().getDate(),
      },
    ];
    const expectedOutput = [
      {
        iNeedHelp: 'please',
        currentTime: new Date().getDate(),
      },
      {
        iDontUnderstand: 'help',
        currentTime: new Date().getDate(),
      },
    ];
    const actualOutput = formatDates(input);
    expect(actualOutput).toEqual(expectedOutput);
  });
  test('when passed an array with many objects those objects are returned with all there values  ', () => {
    const input = [
      { iNeedHelp: 'please', currentTime: new Date().getDate() },
      {
        iDontUnderstand: 'help',
        currentTime: new Date().getDate(),
      },
    ];
    const expectedOutput = [
      { iNeedHelp: 'please', currentTime: new Date().getDate() },
      {
        iDontUnderstand: 'help',
        currentTime: new Date().getDate(),
      },
    ];
    const actualOutput = formatDates(input);
    expect(actualOutput).not.toBe(input);
  });
});

describe.only('makeRefObj', () => {
  test('when passed an empty array return an array ', () => {
    expect(Array.isArray(formatDates([]))).toBe(true);
  });
  test('when passed an array return a new array ', () => {
    const input = [];
    //const expectedOutput = []
    const actualOutput = formatDates(input);
    expect(actualOutput).not.toBe(input);
  });
  test('when passed an array with an object that object is returned with the article_ids value becoming the value for the titles value', () => {
    const input = [
      { article_id: 1, title: 'A', currentTime: new Date().getDate() },
    ];
    const expectedOutput = [{ A: 1, currentTime: new Date().getDate() }];
    const actualOutput = makeRefObj(input);
    expect(actualOutput).toEqual(expectedOutput);
  });
  test('when passed an array with many objects those objects are returned with the article_ids value becoming the value for the titles value', () => {
    const input = [
      { article_id: 1, title: 'A', currentTime: new Date().getDate() },
      { article_id: 2, title: 'B' },
      { article_id: 3, title: 'C' },
    ];
    const expectedOutput = [
      { A: 1, currentTime: new Date().getDate() },
      { B: 2 },
      { C: 3 },
    ];
    const actualOutput = makeRefObj(input);
    expect(actualOutput).toEqual(expectedOutput);
  });
  test('when passed an array with many objects return new objects', () => {
    const input = [
      { article_id: 1, title: 'A', currentTime: new Date().getDate() },
      { article_id: 2, title: 'B' },
      { article_id: 3, title: 'C' },
    ];
    const actualOutput = makeRefObj(input);
    expect(actualOutput[0]).not.toBe(input[0]);
  });
});

describe('formatComments', () => {});
