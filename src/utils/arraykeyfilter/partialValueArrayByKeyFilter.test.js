import filter from './partialValueArrayByKeyFilter';
import array from '../utilTestData/testArray.json';
import resultArray1 from '../utilTestData/resultArray1.json';
import resultArray2 from '../utilTestData/resultArray2.json';

const key1 = 'name';
const value1 = 'Scar';


describe('tests the array filter', () => {
  it('tests the array filter on an unsorted object array by a key in the array with a partial string', () => {
    expect(filter(array, key1, value1)).toEqual(resultArray1);
  });
});

const key2 = 'name';
const value2 = 'Sul';

describe('tests the array filter', () => {
  it('tests the array filter on an unsorted object array by a key in the array with a partial string', () => {
    expect(filter(array, key1, value2)).toEqual(resultArray2);
  });
});

const key3 = 'postal_code';
const value3 = '2L';

describe('tests the array filter', () => {
  it('tests the array filter on an unsorted object array by a key in the array with a partial string', () => {
    expect(filter(array, key3, value3)).toEqual(resultArray1);
  });
});

const key4 = 'postal_code';
const value4 = '2L';

describe('tests the array filter', () => {
  it('tests the array filter on an empty array to return an empty array', () => {
    expect(filter([], key3, value3)).toEqual([]);
  });
});

const key5 = 'postal_code';
const value5 = 'XX';

describe('tests the array filter', () => {
  it('tests the array filter to return an empty array', () => {
    expect(filter(array, key5, value5)).toEqual([]);
  });
});
