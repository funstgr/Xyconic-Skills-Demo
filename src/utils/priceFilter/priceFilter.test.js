import filter from './priceFilter';
import array from '../utilTestData/testArray.json';
import priceResult1 from '../utilTestData/priceResult1.json';
import priceResult2 from '../utilTestData/priceResult2.json';

const price1 = 4;


describe('tests the array filter', () => {
  it('tests the array price filter on an unsorted object array by the price key in the array with a value equal to the price', () => {
    expect(filter(array, price1)).toEqual(priceResult1);
  });
});

const price2 = 3;

describe('tests the array filter', () => {
  it('tests the array price filter on an unsorted object array by the price key in the array with a value equal to the price', () => {
    expect(filter(array, price2)).toEqual(priceResult2);
  });
});


const price3 = 2;

describe('tests the array filter', () => {
  it('tests the array price filter on an unsorted object array by the price key in the array with a value equal to the price', () => {
    expect(filter(array, price3)).toEqual([]);
  });
});
